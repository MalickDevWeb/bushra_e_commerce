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

  const categoryBySlug = {};

  for (const cat of categories) {
    const category = await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: {
        name: cat.name,
        slug: cat.slug,
      },
    });

    categoryBySlug[cat.slug] = category;
  }

  console.log('Seeding products...');

  const products = [
    {
      name: 'Encensoir Royal Cisele',
      slug: 'encensoir-royal-cisele',
      description: 'Encensoir en laiton cisele, ideal pour les moments de partage et de recueillement.',
      price: 45000,
      stock: 12,
      image: '/images/product_1.jpg',
      categorySlug: 'encensoirs',
      isNew: true,
    },
    {
      name: 'Mabkhara Doree Prestige',
      slug: 'mabkhara-doree-prestige',
      description: 'Mabkhara doree au style royal pour parfumer votre interieur avec elegance.',
      price: 38000,
      stock: 8,
      image: '/images/product_2.jpg',
      categorySlug: 'encensoirs',
      isNew: true,
    },
    {
      name: 'Thiouraye Traditionnel',
      slug: 'thiouraye-traditionnel',
      description: 'Un thiouraye aux notes chaudes et enveloppantes inspire de la tradition senegalaise.',
      price: 15000,
      stock: 24,
      image: '/images/hero_censer.jpg',
      categorySlug: 'thiouraye',
    },
    {
      name: 'Parfum Musk Blanc',
      slug: 'parfum-musk-blanc',
      description: 'Un parfum doux et lumineux a porter au quotidien.',
      price: 22000,
      stock: 16,
      image: '/images/ChatGPT Image 3 sept. 2026, 07_44_15.png',
      categorySlug: 'parfums',
    },
    {
      name: 'Coffret Cadeau Bushra',
      slug: 'coffret-cadeau-bushra',
      description: 'Un coffret soigneusement compose pour offrir une experience Bushra complete.',
      price: 65000,
      stock: 6,
      image: '/images/hero.png',
      categorySlug: 'accessoires',
      isNew: true,
    },
    {
      name: 'Bruleur Nomade',
      slug: 'bruleur-nomade',
      description: 'Un bruleur compact et elegant, facile a utiliser a la maison ou en voyage.',
      price: 18000,
      stock: 20,
      image: '/images/ChatGPT Image 3 sept. 2026, 07_44_31.png',
      categorySlug: 'accessoires',
    },
  ];

  for (const product of products) {
    const category = categoryBySlug[product.categorySlug];

    if (!category) {
      throw new Error(`Category not found for product: ${product.slug}`);
    }

    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {
        name: product.name,
        description: product.description,
        price: product.price,
        stock: product.stock,
        image: product.image,
        isNew: product.isNew || false,
        categoryId: category.id,
      },
      create: {
        name: product.name,
        slug: product.slug,
        description: product.description,
        price: product.price,
        stock: product.stock,
        image: product.image,
        isNew: product.isNew || false,
        categoryId: category.id,
      },
    });
  }

  console.log(`Seeded ${products.length} products.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

