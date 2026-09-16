const fs = require('fs');
let code = fs.readFileSync('src/modules/dashboard/ui/AdminDashboardMain.tsx', 'utf-8');

// Reverse fix_layout_final.js:
// Remove outer wrappers
code = code.replace(
  '<AdminPageShell>\n      <div className="flex flex-col gap-8 w-full">\n        <div className="flex flex-col xl:flex-row gap-8 w-full">\n        \n        {/* LEFT MAIN COLUMN */}',
  '<AdminPageShell>\n      <div className="flex flex-col xl:flex-row gap-8 w-full">\n      \n      {/* LEFT MAIN COLUMN */}'
);

code = code.replace(
  '      </div>\n        </div>\n      \n            {/* ROW 5: BOTTOM WIDGETS */}',
  '      </div>\n      \n            {/* ROW 5: BOTTOM WIDGETS */}'
);

fs.writeFileSync('src/modules/dashboard/ui/AdminDashboardMain.tsx', code);
