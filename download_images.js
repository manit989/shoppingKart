import fs from 'fs';
import path from 'path';

async function main() {
  const productFile = './src/data/product.json';
  const products = JSON.parse(fs.readFileSync(productFile, 'utf8'));

  const outDir = './assets/products';
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  for (const product of products) {
    const url = product.photo;
    if (url.startsWith('http')) {
      const ext = path.extname(new URL(url).pathname) || '.png';
      const filename = `product-${product.id}${ext}`;
      const filePath = path.join(outDir, filename);
      
      console.log(`Downloading ${url} to ${filePath}...`);
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(filePath, Buffer.from(buffer));
        
        product.photo = `/assets/products/${filename}`;
      } catch (err) {
        console.error(`Failed to download ${url}: ${err.message}`);
      }
    }
  }

  fs.writeFileSync(productFile, JSON.stringify(products, null, 2) + "\n");
  console.log('Done downloading images and updating product.json');
}

main();
