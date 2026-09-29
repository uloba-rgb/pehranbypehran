// Script to update the price for beige-pashmina-dress product
const { db } = require('../server/db');

async function updatePrice() {
  await db.update('products')
    .set({ price_usd: 12500 })
    .where('product_id', '=', 'beige-pashmina-dress');
  
  console.log('Price updated successfully: beige-pashmina-dress price_usd changed from 45000 to 12500');
}

updatePrice().catch(console.error);