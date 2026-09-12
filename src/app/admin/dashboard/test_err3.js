const parser = require('@babel/parser');
try {
  parser.parse(`const a = <div`, { plugins: ['jsx'] });
} catch (e) {
  console.log("Error 5:", e.message);
}
try {
  parser.parse(`const a = <div> \n  ); \n}`, { plugins: ['jsx'] });
} catch (e) {
  console.log("Error 6:", e.message);
}

