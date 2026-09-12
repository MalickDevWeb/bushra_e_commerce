const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding categories...');
  
  const categories = [
    { name: 'Thiouraye', slug: 'thiouraye' },
    { name: 'Encensoirs', slug: 'encensoirs' },
    { name: 'Parfums', slug: 'parfums' },
    { name: 'Accessoires', slug: 'accessoires' }
  ];

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: {
        name: cat.name,
        slug: cat.slug,
      },
    });
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

