const fs = require('fs');

const lines = fs.readFileSync('/home/pmt/bushra/src/app/admin/dashboard/page.tsx', 'utf-8').split('\n');

let stack = [];
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('//') || line.includes('{/*')) continue;
    
    // get indent level
    const indent = line.search(/\S|$/);
    
    if (line.includes('<div') && !line.includes('</div')) {
        stack.push({line: i + 1, indent, text: line.trim()});
    } else if (line.includes('</div') && !line.includes('<div')) {
        if (stack.length) {
            const popped = stack.pop();
            if (popped.indent !== indent) {
                console.log(`Mismatch at line ${i + 1}: </div > (indent ${indent}) closed <div > from line ${popped.line} (indent ${popped.indent})`);
                break;
            }
        }
    }
}

