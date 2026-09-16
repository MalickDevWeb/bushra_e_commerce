const fs = require('fs');
let code = fs.readFileSync('src/modules/dashboard/ui/AdminDashboardLayout.tsx', 'utf-8');
const lines = code.split('\n');
const index = lines.findIndex(l => l.includes('    </AdminPageShell>'));
fs.writeFileSync('src/modules/dashboard/ui/AdminDashboardLayout.tsx', lines.slice(0, index).join('\n') + '\n    </AdminPageShell>\n  )\n}\n');
