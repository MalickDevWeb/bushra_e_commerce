const fs = require('fs');
let code = fs.readFileSync('src/modules/dashboard/ui/AdminDashboardLayout.tsx', 'utf-8');
code = code.replace('      </div>\n    </AdminPageShell>\n  )\n}\n', '        </div>\n      </div>\n    </AdminPageShell>\n  )\n}\n');
fs.writeFileSync('src/modules/dashboard/ui/AdminDashboardLayout.tsx', code);
