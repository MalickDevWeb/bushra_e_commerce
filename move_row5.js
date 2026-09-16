const fs = require('fs');
let code = fs.readFileSync('src/modules/dashboard/ui/AdminDashboardMain.tsx', 'utf-8');

// The layout is:
// <AdminPageShell className="xl:flex-row">
//   <div className="flex-1 ...">
//     ...
//     {/* ROW 5: BOTTOM WIDGETS */}
//     ...
//   </div>
//   {/* RIGHT SIDEBAR COLUMN */}
//   ...
// </AdminPageShell>

// I will extract ROW 5 and put it after RIGHT SIDEBAR COLUMN.
// However, AdminPageShell is xl:flex-row. If I put it as a 3rd child, it will be placed on the right!
// So we need to wrap LEFT and RIGHT in a flex-row, and put ROW 5 below it in a flex-col!

const replacement = `
    <AdminPageShell>
      <div className="flex flex-col xl:flex-row gap-8 w-full">
        {/* LEFT MAIN COLUMN */}
        <div className="flex-1 flex flex-col gap-6 overflow-hidden">
          {/* ROW 1: KPI CARDS */}
`;

code = code.replace('<AdminPageShell className="xl:flex-row">\n      \n      {/* LEFT MAIN COLUMN */}\n      <div className="flex-1 flex flex-col gap-6 overflow-hidden">\n        \n        {/* ROW 1: KPI CARDS */}', replacement);

