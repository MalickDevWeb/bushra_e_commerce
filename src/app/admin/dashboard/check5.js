const fs = require('fs');
const htmlparser2 = require('htmlparser2');

const content = fs.readFileSync('/home/pmt/bushra/src/app/admin/dashboard/page.tsx', 'utf-8');
let openCount = 0;
let closeCount = 0;

const parser = new htmlparser2.Parser({
    onopentag(name) {
        if (name === 'div') openCount++;
    },
    onclosetag(name) {
        if (name === 'div') closeCount++;
    }
}, {xmlMode: true});

parser.write(content);
parser.end();

console.log("htmlparser2 open div:", openCount);
console.log("htmlparser2 close div:", closeCount);

