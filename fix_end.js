const fs = require('fs');
let code = fs.readFileSync('src/modules/dashboard/ui/AdminDashboardMain.tsx', 'utf-8');
code = code.replace('      </div>\n    </AdminPageShell>', '      </div>\n      </div>\n    </AdminPageShell>');
fs.writeFileSync('src/modules/dashboard/ui/AdminDashboardMain.tsx', code);
