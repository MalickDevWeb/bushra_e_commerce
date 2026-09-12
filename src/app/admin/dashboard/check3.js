const fs = require('fs');
const htmlparser2 = require('htmlparser2');

const content = fs.readFileSync('/home/pmt/bushra/src/app/admin/dashboard/page.tsx', 'utf-8');

let stack = [];
let lines = content.split('\n');

const parser = new htmlparser2.Parser({
    onopentag(name, attributes) {
        stack.push({name, line: parser.startIndex});
    },
    onclosetag(name) {
        if (stack.length > 0 && stack[stack.length - 1].name === name) {
            stack.pop();
        } else {
            console.log("Mismatch! Trying to close", name, "but top of stack is", stack.length > 0 ? stack[stack.length - 1].name : "empty");
        }
    }
}, {xmlMode: true}); // Use xmlMode to handle self-closing properly

parser.write(content);
parser.end();

if (stack.length > 0) {
    console.log("Unclosed tags:", stack.map(s => {
        let l = content.substring(0, s.line).split('\n').length;
        return `${s.name} at line ${l}`;
    }));
} else {
    console.log("All tags closed.");
}

