import { randomUUID } from "node:crypto";
import { orderRepository } from "@/modules/orders/repositories/order.repository";
import { prisma } from "@/lib/prisma";

const allowedPaymentMethods = new Set(["COD", "WAVE", "ORANGE_MONEY"]);

type CreateOrderInput = {
  userId?: string;
  customerName: string;
  customerPhone: string;
  address: string;
  notes?: string;
  deliveryFee: number;
  paymentMethod: string;
  items: Array<{ productId: string; quantity: number }>;
};

export const orderService = {
  async create(input: CreateOrderInput) {
    if (!input.customerName.trim() || !input.customerPhone.trim() || !input.address.trim()) {
      return { success: false as const, error: "Les informations de livraison sont obligatoires." };
    }
    if (!/^[+\d][\d\s().-]{7,24}$/.test(input.customerPhone)) {
      return { success: false as const, error: "Le numéro de téléphone est invalide." };
    }
    if (!Number.isFinite(input.deliveryFee) || input.deliveryFee < 0) {
      return { success: false as const, error: "Les frais de livraison sont invalides." };
    }
    if (!allowedPaymentMethods.has(input.paymentMethod)) {
      return { success: false as const, error: "La méthode de paiement est invalide." };
    }
    if (!input.items.length || input.items.some((item) => !Number.isInteger(item.quantity) || item.quantity < 1)) {
      return { success: false as const, error: "Le panier est vide ou contient une quantité invalide." };
    }

    const quantities = new Map<string, number>();
    for (const item of input.items) {
      quantities.set(item.productId, (quantities.get(item.productId) || 0) + item.quantity);
    }
    const products = await prisma.product.findMany({ where: { id: { in: [...quantities.keys()] } } });
    if (products.length !== quantities.size) {
      return { success: false as const, error: "Un produit du panier n'existe plus." };
    }

    const orderItems = products.map((product) => ({
      productId: product.id,
      quantity: quantities.get(product.id) || 0,
      price: product.price,
    }));
    const subtotal = orderItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalAmount = subtotal + input.deliveryFee;

    try {
      const order = await orderRepository.createWithItems({
        orderNumber: `BSH-${Date.now()}-${randomUUID().slice(0, 6).toUpperCase()}`,
        userId: input.userId,
        customerName: input.customerName.trim(),
        customerPhone: input.customerPhone.trim(),
        address: input.address.trim(),
        notes: input.notes?.trim(),
        totalAmount,
        deliveryFee: input.deliveryFee,
        paymentMethod: input.paymentMethod,
        items: orderItems,
      });
      return { success: true as const, order };
    } catch (error) {
      if (error instanceof Error && error.message.startsWith("STOCK_UNAVAILABLE:")) {
        return { success: false as const, error: "Un ou plusieurs produits ne sont plus disponibles en quantité suffisante." };
      }
      throw error;
    }
  },

  track(orderNumber: string) {
    return orderRepository.findByOrderNumber(orderNumber.trim().toUpperCase());
  },
};