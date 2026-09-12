const parser = require('@babel/parser');
try {
  parser.parse(`const a = <div> {/* </div>`, { plugins: ['jsx'] });
} catch (e) {
  console.log("Error 3:", e.message);
}
try {
  parser.parse(`const a = <div> "L'élégance" </div>`, { plugins: ['jsx'] });
} catch (e) {
  console.log("Error 4:", e.message);
}

