const fs = require('fs');
let code = fs.readFileSync('src/modules/dashboard/ui/AdminDashboardMain.tsx', 'utf-8');
code = code.replace('    </AdminPageShell>\n  )\n}', '      </div>\n    </AdminPageShell>\n  )\n}');
fs.writeFileSync('src/modules/dashboard/ui/AdminDashboardMain.tsx', code);
