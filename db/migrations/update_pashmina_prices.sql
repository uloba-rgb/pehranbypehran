-- Update price_usd for pashmina-shawls products from 4490 to 4990
UPDATE products 
SET price_usd = 4990 
WHERE type = 'pashmina-shawls' 
  AND price_usd = 4490;