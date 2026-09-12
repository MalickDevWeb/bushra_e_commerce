const fs = require('fs');
const htmlparser2 = require('htmlparser2');

const content = fs.readFileSync('/home/pmt/bushra/src/app/admin/dashboard/page.tsx', 'utf-8');
const lines = content.split('\n');

let stack = [];
const parser = new htmlparser2.Parser({
    onopentag(name) {
        stack.push({name, line: content.substring(0, parser.startIndex).split('\n').length});
    },
    onclosetag(name) {
        if (stack.length && stack[stack.length - 1].name === name) {
            stack.pop();
        }
    }
}, {xmlMode: true});

parser.write(content);
// DO NOT CALL parser.end() because we want to see what's left on the stack

console.log("Remaining on stack:");
console.log(stack);

