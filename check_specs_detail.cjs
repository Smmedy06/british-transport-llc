const fs = require('fs');
const path = require('path');

const catPath = path.join(__dirname, 'equipements', 'caterpillar_products.json');
const komatsuPath = path.join(__dirname, 'equipements', 'komatsu_products.json');
const volvoPath = path.join(__dirname, 'equipements', 'volvo_products.json');

const catData = fs.existsSync(catPath) ? JSON.parse(fs.readFileSync(catPath, 'utf-8')) : [];
const komatsuData = fs.existsSync(komatsuPath) ? JSON.parse(fs.readFileSync(komatsuPath, 'utf-8')) : [];
const volvoData = fs.existsSync(volvoPath) ? JSON.parse(fs.readFileSync(volvoPath, 'utf-8')) : [];

function findAndPrint(data, name) {
  let found = null;
  data.forEach(cat => {
    const check = (m) => {
      if (m.model_name.toLowerCase().includes(name.toLowerCase())) {
        found = m;
      }
    };
    if (cat.models) {
      cat.models.forEach(check);
    } else if (cat.subcategories) {
      cat.subcategories.forEach(sub => {
        if (sub.models) {
          sub.models.forEach(check);
        }
      });
    }
  });
  if (found) {
    console.log(`Found specs for "${name}":`, found.specs);
  } else {
    console.log(`Not found: "${name}"`);
  }
}

console.log('--- CAT SPECS ---');
findAndPrint(catData, '336');
findAndPrint(catData, 'D11');
findAndPrint(catData, '950 GC');

console.log('\n--- KOMATSU SPECS ---');
findAndPrint(komatsuData, 'PC390LC');
findAndPrint(komatsuData, 'D155AX');
findAndPrint(komatsuData, 'GD655-7');

console.log('\n--- VOLVO SPECS ---');
findAndPrint(volvoData, 'EC950F');
findAndPrint(volvoData, 'L350H');
findAndPrint(volvoData, 'A40');
