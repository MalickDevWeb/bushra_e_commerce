const fs = require('fs');
const parser = require('@babel/parser');

const content = fs.readFileSync('/home/pmt/bushra/src/app/admin/dashboard/page.tsx', 'utf-8');

try {
  parser.parse(content, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript']
  });
  console.log("Parse successful!");
} catch (e) {
  console.log("Parse error:", e.message);
  console.log("Location:", e.loc);
}

