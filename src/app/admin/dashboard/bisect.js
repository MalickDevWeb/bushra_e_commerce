const fs = require('fs');
const parser = require('@babel/parser');

const content = fs.readFileSync('/home/pmt/bushra/src/app/admin/dashboard/page.tsx', 'utf-8');
const lines = content.split('\n');

function check(start, end) {
  const newContent = [...lines.slice(0, 10), ...lines.slice(start, end), ...lines.slice(560)].join('\n');
  try {
    parser.parse(newContent, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript']
    });
    return true;
  } catch(e) {
    return false;
  }
}

console.log("All cut:", check(10, 10));
console.log("Keep all:", check(10, 560));

// Binary search for the bad line
let l = 10, r = 560;
while (l < r) {
  let mid = Math.floor((l + r) / 2);
  // test left half: keep l to mid
  if (check(10, mid)) {
    // left half is fine, issue must be in mid..r
    l = mid + 1;
  } else {
    // left half has the issue
    r = mid;
  }
}
console.log("Issue might be around line", l);


