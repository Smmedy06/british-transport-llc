const fs = require('fs');
const path = require('path');

const catPath = path.join(__dirname, 'equipements', 'caterpillar_products.json');
const komatsuPath = path.join(__dirname, 'equipements', 'komatsu_products.json');

const catData = fs.existsSync(catPath) ? JSON.parse(fs.readFileSync(catPath, 'utf-8')) : [];
const komatsuData = fs.existsSync(komatsuPath) ? JSON.parse(fs.readFileSync(komatsuPath, 'utf-8')) : [];

function searchKeyword(data, kw) {
  const results = [];
  data.forEach(cat => {
    const processModel = (m) => {
      if (m.model_name.toLowerCase().includes(kw.toLowerCase())) {
        results.push({ category: cat.category_name, model: m.model_name });
      }
    };
    if (cat.models) {
      cat.models.forEach(processModel);
    } else if (cat.subcategories) {
      cat.subcategories.forEach(sub => {
        if (sub.models) {
          sub.models.forEach(processModel);
        }
      });
    }
  });
  return results;
}

console.log('Search for "PC210" in Komatsu:', searchKeyword(komatsuData, 'PC210'));
console.log('Search for "WA470" in Komatsu:', searchKeyword(komatsuData, 'WA470'));
console.log('Search for "WA480" in Komatsu:', searchKeyword(komatsuData, 'WA480'));
console.log('Search for "WA" (first 10) in Komatsu:', searchKeyword(komatsuData, 'WA').slice(0, 10));
console.log('Search for "D8" in Caterpillar:', searchKeyword(catData, 'D8'));
console.log('Search for "TH" in Caterpillar:', searchKeyword(catData, 'TH'));
console.log('Search for "Telehandler" in Caterpillar:', searchKeyword(catData, 'Telehandler'));
