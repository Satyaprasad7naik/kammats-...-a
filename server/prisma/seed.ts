import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products = [
  {
    name: 'Classic Masala Chai',
    description: 'An authentic, aromatic blend of black tea and traditional spices.',
    price: 92,
    category: 'Tea',
    stock: 100,
    images: JSON.stringify([

      '/images/Masala Chai/brown-drink.webp',       // 1. Main product image
      '/images/Masala Chai/brown-bg.svg',           // 2. Background pattern
      '/images/Masala Chai/brown-elements.webp',    // 3. Floating pieces on hover
      '#d69766',                                         // 4. Card background color
      '#2b1b14'                                               // 5. Text color
    ])
  },
  {
    name: 'CLASSIC TEA',
    description: 'A zesty and refreshig infusion of ginger and tangy lemon.',
    price: 110,
    category: 'Tea',
    stock: 100,
    images: JSON.stringify([
      '/images/CLASSIC TEA/red-drink.webp',     // Assumes this file is in /public/images
      '/images/CLASSIC TEA/red-bg.svg',          // Assumes this file is in /public/images
      '/images/CLASSIC TEA/red-elements.webp',   // Assumes this file is in /public/images// Assumes this file is in /public/images
      '#f0c36c',
      '#523122'
    ])
  },
  {
    name: 'ROYAL TEA',
    description: 'A fragrant and soothing tea with the sweet aroma of cardamom.',
    price: 105,
    category: 'Tea',
    stock: 100,
    images: JSON.stringify([
      '/images/ROYAL TEA/blue-drink.webp',     // Assumes this file is in /public/images// Assumes this file is in /public/images
      '/images/ROYAL TEA/blue-bg.svg',          // Assumes this file is in /public/images
      '/images/ROYAL TEA/blue-elements.webp',   // Assumes this file is in /public/imagespng',    // Assumes this file is in /public/images
      '#8fbc8f',
      '#ffffff'
    ])
  },
  {
    name: 'DELIGHT TEA',
    description: 'An exotic green tea blend with saffron, almonds, and spices.',
    price: 149,
    category: 'Premium Tea',
    stock: 100,
    images: JSON.stringify([
      '/images/ORANGE TEA/orange-drink.webp',      // Assumes this file is in /public/images
      '/images/ORANGE TEA/orange-bg.svg',          // Assumes this file is in /public/images
      '/images/ORANGE TEA/orange-elements.webp',     // Assumes this file is in /public/images
      '#d94b59',
      '#ffffff'
    ])
  },
  {
    name: 'GREEN TEA',
    description: 'A strong, full-bodied black tea from the gardens of Assam.',
    price: 89,
    category: 'Tea',
    stock: 100,
    images: JSON.stringify([
      '/images/WHITE TEA/white-drink.webp',      // Assumes this file is in /public/images
      '/images/WHITE TEA/white-bg.svg',          // Assumes this file is in /public/images
      '/images/WHITE TEA/white-bg.webp',  // Assumes this file is in /public/images
      '#4a2c2a',
      '#ffffff'
    ])
  },
   {
    name: 'SUPREME TEA',
    description: 'A strong, full-bodied black tea from the gardens of Assam.',
    price: 89,
    category: 'Tea',
    stock: 100,
    images: JSON.stringify([
      '/images/BLACK TEA/black-drink.webp',      // Assumes this file is in /public/images
      '/images/BLACK TEA/black-bg.svg',          // Assumes this file is in /public/images
      '/images/BLACK TEA/black-elements.webp',  // Assumes this file is in /public/images
      '#4a2c2a',
      '#ffffff'
    ])
  }
];

async function main() {
  console.log('Starting the seed process...');
  
  try {
    console.log('Deleting all existing products to ensure a clean slate...');
    await prisma.product.deleteMany({});
    console.log('✅ Existing products deleted successfully.');

    // console.log(`Attempting to create ${products.length} new products in a single batch...`);
//     const result = await prisma.product.createMany({

//   data: products,
// });
//     console.log(`✅ Successfully created ${result.count} new products.`);
for (const product of products) {
  await prisma.product.create({
    data: product,
  });

  console.log(`✅ Created: ${product.name}`);
}

console.log("🎉 All products seeded successfully.");
    
  } catch (error) {
    console.error('❌ An error occurred during the seeding process:', error);
    process.exit(1); // Exit with an error code
  } finally {
    console.log('Seeding process finished. Disconnecting Prisma Client.');
    await prisma.$disconnect();
  }
}

main();
