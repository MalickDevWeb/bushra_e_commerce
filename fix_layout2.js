const fs = require('fs');
let code = fs.readFileSync('src/modules/dashboard/ui/AdminDashboardMain.tsx', 'utf-8');

// Replace <AdminPageShell className="xl:flex-row"> with <AdminPageShell> \n <div className="flex flex-col xl:flex-row gap-6 w-full">
code = code.replace('<AdminPageShell className="xl:flex-row">', '<AdminPageShell>\n      <div className="flex flex-col xl:flex-row gap-8 w-full">');

// Find ROW 5
const row5Start = code.indexOf('{/* ROW 5: BOTTOM WIDGETS */}');
if (row5Start === -1) {
    console.error('ROW 5 not found');
    process.exit(1);
}

// Find the end of LEFT MAIN COLUMN which is just before RIGHT SIDEBAR COLUMN
const rightSidebarStart = code.indexOf('{/* RIGHT SIDEBAR COLUMN */}');

// The chunk to move is from ROW 5 to rightSidebarStart
// Actually, it's safer to extract ROW 5 specifically.
let row5Chunk = code.substring(row5Start, rightSidebarStart);

// row5Chunk ends with some </div>'s.
// In the current file, ROW 5 ends, then there are TWO </div> closing LEFT MAIN COLUMN.
// Wait! Let me just extract it using regex or manual slicing.
