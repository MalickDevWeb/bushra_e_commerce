const fs = require('fs');
const parser = require('@babel/parser');
const content = fs.readFileSync('/home/pmt/bushra/src/app/admin/dashboard/page.tsx', 'utf-8');
const lines = content.split('\n');
const newContent = [...lines.slice(0, 10), ...lines.slice(10, 12), ...lines.slice(560)].join('\n');
console.log(newContent);
try {
  parser.parse(newContent, { sourceType: 'module', plugins: ['jsx', 'typescript'] });
} catch(e) {
  console.log(e.message);
}

