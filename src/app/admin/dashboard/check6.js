const fs = require('fs');
const htmlparser2 = require('htmlparser2');

const content = fs.readFileSync('/home/pmt/bushra/src/app/admin/dashboard/page.tsx', 'utf-8');
const lines = content.split('\n');

const parser = new htmlparser2.Parser({
    onclosetag(name) {
        if (name === 'div') {
            const lineIdx = content.substring(0, parser.endIndex).split('\n').length - 1;
            const line = lines[lineIdx];
            if (!line.includes('</div')) {
                console.log(`Self closing div at line ${lineIdx + 1}:`, line);
            }
        }
    }
}, {xmlMode: true});

parser.write(content);
parser.end();

