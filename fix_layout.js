const fs = require('fs');
let code = fs.readFileSync('src/modules/dashboard/ui/AdminDashboardLayout.tsx', 'utf-8');

code = code.replace('        </div>\n\n      {/* RIGHT SIDEBAR COLUMN */}', '        </div>\n      </div>\n\n      {/* RIGHT SIDEBAR COLUMN */}');

if (!code.endsWith('      </div>\n    </AdminPageShell>\n  )\n}\n')) {
    code = code.replace('    </AdminPageShell>\n  )\n}\n', '      </div>\n    </AdminPageShell>\n  )\n}\n');
}

fs.writeFileSync('src/modules/dashboard/ui/AdminDashboardLayout.tsx', code);
