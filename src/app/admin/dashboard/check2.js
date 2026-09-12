const fs = require('fs');
const lines = fs.readFileSync('/home/pmt/bushra/src/app/admin/dashboard/page.tsx', 'utf-8').split('\n');

let stack = [];
for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  
  // ignore comments simple case
  if (line.trim().startsWith('{/*')) continue;
  
  let openMatches = [...line.matchAll(/<div/g)];
  for (let m of openMatches) stack.push(i + 1);
  
  let closeMatches = [...line.matchAll(/<\/div>/g)];
  for (let m of closeMatches) {
    if (stack.length > 0) {
      stack.pop();
    } else {
      console.log('Extra close at line', i + 1);
    }
  }
}

console.log('Unclosed divs opened at lines:', stack);

