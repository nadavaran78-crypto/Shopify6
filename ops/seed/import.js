const fs = require('fs');
const data = JSON.parse(fs.readFileSync(__dirname + '/seed-data.json', 'utf-8'));
console.log('Importing products:', data.products.length);
console.log('Importing collections:', data.collections.length);
// TODO: Implement Shopify Admin API calls
