const parser = require('@babel/parser');
try {
  parser.parse(`const a = <div> { \n  </div> \n}`, { plugins: ['jsx'] });
} catch (e) {
  console.log("Error 7:", e.message);
}
try {
  parser.parse(`const a = <div> \n < \n  </div> \n}`, { plugins: ['jsx'] });
} catch (e) {
  console.log("Error 8:", e.message);
}

