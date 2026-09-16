import { paymentRepository } from "@/modules/payments/repositories/payment.repository";

export const paymentService = {
  async confirm(paymentId: string, transactionId: string) {
    if (!paymentId || !transactionId.trim()) {
      return { success: false as const, error: "Les informations de paiement sont incomplètes." };
    }
    const existing = await paymentRepository.findByTransactionId(transactionId.trim());
    if (existing) return { success: true as const, payment: existing };
    const payment = await paymentRepository.markPaid(paymentId, transactionId.trim());
    return { success: true as const, payment };
  },

  async fail(paymentId: string) {
    if (!paymentId) return { success: false as const, error: "Paiement introuvable." };
    const payment = await paymentRepository.markFailed(paymentId);
    return { success: true as const, payment };
  },
};