import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker/locale/fr";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient({ log: ['warn', 'error'] });

const IMAGES = ["/images/mobile/product-elegance.png", "/images/mobile/product-prestige.png", "/images/mobile/product-royal.png", "/images/product_1.jpg", "/images/product_2.jpg", "/images/hero_censer.jpg"];
function randomImage() { return IMAGES[Math.floor(Math.random() * IMAGES.length)]; }
function toSlug(str) { return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''); }

async function main() {
  console.log("🚀 Début du seeding massif...");

  console.log("📦 Création des collections...");
  const categoriesToCreate = [];
  for (let i = 0; i < 15; i++) {
    const name = `Collection ${faker.commerce.department()} ${i} ${faker.string.alphanumeric(4)}`;
    categoriesToCreate.push({ id: faker.string.uuid(), name: name, slug: toSlug(name), description: faker.lorem.paragraph(), image: randomImage() });
  }
  await prisma.category.createMany({ data: categoriesToCreate, skipDuplicates: true });
  
  console.log("🛍️ Création de 350 produits...");
  const productsToCreate = [];
  for (let i = 0; i < 350; i++) {
    const category = categoriesToCreate[Math.floor(Math.random() * categoriesToCreate.length)];
    const name = `${faker.commerce.productAdjective()} ${faker.commerce.productName()} ${i} ${faker.string.alphanumeric(4)}`;
    productsToCreate.push({
      id: faker.string.uuid(), name: name, slug: toSlug(name), description: faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price({ min: 10000, max: 150000 })), stock: faker.number.int({ min: 0, max: 200 }),
      categoryId: category.id, image: randomImage()
    });
  }
  for (let i = 0; i < productsToCreate.length; i += 50) { await prisma.product.createMany({ data: productsToCreate.slice(i, i + 50), skipDuplicates: true }); }

  console.log("👥 Création de 350 clients...");
  const hashedPassword = await bcrypt.hash("password123", 10);
  const usersToCreate = [];
  for (let i = 0; i < 350; i++) {
    usersToCreate.push({
      id: faker.string.uuid(), name: faker.person.fullName(),
      email: faker.internet.email({ provider: 'bushra-fake.com' }).toLowerCase() + Math.random().toString().slice(2,8),
      password: hashedPassword, phone: `+221${faker.string.numeric(9)}`, role: "USER"
    });
  }
  for (let i = 0; i < usersToCreate.length; i += 50) { await prisma.user.createMany({ data: usersToCreate.slice(i, i + 50), skipDuplicates: true }); }

  console.log("🛒 Création de 1200 commandes et paiements...");
  const ordersToCreate = [];
  const orderItemsToCreate = [];
  const paymentsToCreate = [];
  const deliveryToCreate = [];
  const statuses = ["PENDING", "PAID", "SHIPPED", "DELIVERED", "DELIVERED", "DELIVERED", "CANCELLED"];

  for (let i = 0; i < 1200; i++) {
    const user = usersToCreate[Math.floor(Math.random() * usersToCreate.length)];
    const orderId = faker.string.uuid();
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const createdAt = faker.date.past({ years: 1 });
    const numItems = faker.number.int({ min: 1, max: 4 });
    let totalAmount = 0;
    
    for (let j = 0; j < numItems; j++) {
      const product = productsToCreate[Math.floor(Math.random() * productsToCreate.length)];
      const quantity = faker.number.int({ min: 1, max: 3 });
      const price = product.price;
      totalAmount += (price * quantity);
      
      orderItemsToCreate.push({ id: faker.string.uuid(), orderId: orderId, productId: product.id, quantity: quantity, price: price });
    }

    ordersToCreate.push({
      id: orderId, orderNumber: "CMD-" + faker.string.alphanumeric(8).toUpperCase(),
      userId: user.id, 
      customerName: user.name,
      customerPhone: user.phone,
      address: faker.location.streetAddress(),
      status: status, totalAmount: totalAmount, createdAt: createdAt, updatedAt: createdAt
    });

    paymentsToCreate.push({
      id: faker.string.uuid(), orderId: orderId, amount: totalAmount,
      provider: faker.helpers.arrayElement(["WAVE", "ORANGE_MONEY", "CASH_ON_DELIVERY"]),
      status: status === "CANCELLED" ? "FAILED" : (status === "PENDING" ? "PENDING" : "PAID"), createdAt: createdAt
    });

    deliveryToCreate.push({
      id: faker.string.uuid(), orderId: orderId, carrier: faker.helpers.arrayElement(["LIVREUR_MAISON", "YANGO_DELIVERY"]),
      status: status === "DELIVERED" ? "DELIVERED" : (status === "SHIPPED" ? "SHIPPED" : "PENDING"),
      trackingNumber: `TRK-${faker.string.alphanumeric(8).toUpperCase()}`, createdAt: createdAt
    });
  }

  console.log("-> Insertion des commandes...");
  for (let i = 0; i < ordersToCreate.length; i += 200) { await prisma.order.createMany({ data: ordersToCreate.slice(i, i + 200), skipDuplicates: true }); }

  console.log("-> Insertion des articles...");
  for (let i = 0; i < orderItemsToCreate.length; i += 500) { await prisma.orderItem.createMany({ data: orderItemsToCreate.slice(i, i + 500), skipDuplicates: true }); }

  console.log("-> Insertion des paiements...");
  for (let i = 0; i < paymentsToCreate.length; i += 500) { await prisma.payment.createMany({ data: paymentsToCreate.slice(i, i + 500), skipDuplicates: true }); }

  console.log("-> Insertion des livraisons...");
  for (let i = 0; i < deliveryToCreate.length; i += 500) { await prisma.delivery.createMany({ data: deliveryToCreate.slice(i, i + 500), skipDuplicates: true }); }

  console.log("✅ Seeding massif terminé avec succès !");
}

main().catch(e => { console.error(e); process.exit(1); }).finally(() => { prisma.$disconnect(); });
