import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting analytics seed...");
  
  // 1. Get or create a category 'Oud & Encens' and some products
  let category = await prisma.category.findFirst({ where: { name: { contains: "Oud" } } });
  if (!category) {
    category = await prisma.category.create({
      data: { name: "Oud & Encens", slug: "oud-encens", description: "Parfums d'orient", image: "/cat-oud.jpg" }
    });
  }

  const oudProducts = [];
  for (let i = 0; i < 3; i++) {
    const p = await prisma.product.create({
      data: {
        name: `Parfum Oud ${faker.word.adjective()}`,
        slug: faker.helpers.slugify(`Parfum Oud ${faker.string.uuid()}`),
        description: "Un parfum exceptionnel",
        price: faker.number.int({ min: 10000, max: 40000 }),
        stock: 50,
        image: "/product.jpg",
        categoryId: category.id,
        sku: `OUD-${faker.string.alphanumeric(4).toUpperCase()}`
      }
    });
    oudProducts.push(p);
  }

  // 2. Create 20 Users
  const users = [];
  for (let i = 0; i < 20; i++) {
    const u = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        password: "hashedpassword",
        role: "USER",
        createdAt: faker.date.past({ years: 1 })
      }
    });
    users.push(u);
  }

  // 3. Create Orders for these users over the past 6 months
  console.log("Creating orders...");
  for (const user of users) {
    const orderCount = faker.number.int({ min: 0, max: 7 }); 
    for (let i = 0; i < orderCount; i++) {
      const pastDate = faker.date.recent({ days: 180 });
      const product = faker.helpers.arrayElement(oudProducts);
      const qty = faker.number.int({ min: 1, max: 3 });

      await prisma.order.create({
        data: {
          orderNumber: `ORD-${faker.string.alphanumeric(6).toUpperCase()}`,
          userId: user.id,
          customerName: user.name || "Client",
          customerPhone: user.phone || "00000000",
          address: "Dakar, Senegal",
          totalAmount: product.price * qty + 2000, 
          status: "DELIVERED",
          paymentMethod: "WAVE",
          paymentStatus: "PAID",
          createdAt: pastDate,
          items: {
            create: {
              productId: product.id,
              quantity: qty,
              price: product.price
            }
          }
        }
      });
    }
  }

  // 4. Create one specific "Aïssatou Diallo" for our AI demo if not exists
  let aissatou = await prisma.user.findFirst({ where: { email: "aissatou.demo@bushra.com" } });
  if (!aissatou) {
    aissatou = await prisma.user.create({
      data: {
        name: "Aïssatou Diallo",
        email: "aissatou.demo@bushra.com",
        phone: "+221 77 123 45 67",
        password: "pwd",
        role: "USER"
      }
    });

    const oudProduct = oudProducts[0];
    for (let i = 0; i < 4; i++) {
      await prisma.order.create({
        data: {
          orderNumber: `ORD-AISS-${i}`,
          userId: aissatou.id,
          customerName: "Aïssatou Diallo",
          customerPhone: "+221 77 123 45 67",
          address: "Dakar",
          totalAmount: oudProduct.price,
          status: "DELIVERED",
          createdAt: new Date(Date.now() - (67 + i * 31) * 24 * 60 * 60 * 1000),
          items: {
            create: { productId: oudProduct.id, quantity: 1, price: oudProduct.price }
          }
        }
      });
    }
  }

  await prisma.customerSegment.create({
    data: { name: "Risque Churn Oud", ruleType: "DYNAMIC", description: "Clients Oud inactifs > 60 jours" }
  });

  const vipSeg = await prisma.customerSegment.create({
    data: { name: "VIP", ruleType: "AUTOMATIC", description: "> 5 commandes" }
  });

  await prisma.campaign.create({
    data: {
      name: "Promo VIP Tabaski",
      channel: "SMS",
      status: "COMPLETED",
      segmentId: vipSeg.id,
      content: "Profitez de -20% pour la Tabaski !",
      conversions: 42,
      revenue: 680000,
      createdAt: faker.date.recent({ days: 30 })
    }
  });

  console.log("Analytics seed completed!");
}

main().catch(e => {
  console.error(e);
  process.exit(1);
}).finally(() => {
  prisma.$disconnect();
});
