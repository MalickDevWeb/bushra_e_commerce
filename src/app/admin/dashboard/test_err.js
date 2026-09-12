const parser = require('@babel/parser');
try {
  parser.parse(`const a = <div> { </div>`, { plugins: ['jsx'] });
} catch (e) {
  console.log("Error 1:", e.message);
}
try {
  parser.parse(`const a = <div> <span> </div>`, { plugins: ['jsx'] });
} catch (e) {
  console.log("Error 2:", e.message);
}

