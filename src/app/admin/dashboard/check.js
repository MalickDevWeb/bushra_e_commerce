const fs = require('fs');
const content = fs.readFileSync('/home/pmt/bushra/src/app/admin/dashboard/page.tsx', 'utf-8');

const opens = [...content.matchAll(/<div/g)].length;
const closes = [...content.matchAll(/<\/div>/g)].length;

console.log('opens:', opens);
console.log('closes:', closes);

