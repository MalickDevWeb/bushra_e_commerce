const fs = require('fs');
let code = fs.readFileSync('src/modules/dashboard/ui/AdminDashboardMain.tsx', 'utf-8');

// The file currently has:
// <AdminPageShell>
//   <div className="flex flex-col xl:flex-row gap-8 w-full">
//     <div className="flex-1 ..."> (Left col)
//     <div className="w-full xl:w-[320px] ..."> (Right col)
//     {/* ROW 5 */}
//   </div>
// </AdminPageShell>

// I want to change it to:
// <AdminPageShell>
//   <div className="flex flex-col gap-8 w-full">
//     <div className="flex flex-col xl:flex-row gap-8 w-full">
//       <div className="flex-1 ...">
//       <div className="w-full xl:w-[320px] ...">
//     </div>
//     {/* ROW 5 */}
//   </div>
// </AdminPageShell>

// Replace the first div after AdminPageShell
code = code.replace(
  '<AdminPageShell>\n      <div className="flex flex-col xl:flex-row gap-8 w-full">\n      \n      {/* LEFT MAIN COLUMN */}',
  '<AdminPageShell>\n      <div className="flex flex-col gap-8 w-full">\n        <div className="flex flex-col xl:flex-row gap-8 w-full">\n        \n        {/* LEFT MAIN COLUMN */}'
);

// Close the inner div before ROW 5
code = code.replace(
  '      </div>\n      \n            {/* ROW 5: BOTTOM WIDGETS */}',
  '      </div>\n        </div>\n      \n            {/* ROW 5: BOTTOM WIDGETS */}'
);

// The end of the file currently has:
//       </div>
//       </div>
//     </AdminPageShell>
// We need to keep two closing divs, because we added an outer wrapper! So we don't need to change the end!

fs.writeFileSync('src/modules/dashboard/ui/AdminDashboardMain.tsx', code);
