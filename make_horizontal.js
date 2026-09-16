const fs = require('fs');
let code = fs.readFileSync('src/modules/dashboard/ui/AdminDashboardMain.tsx', 'utf-8');

// The right sidebar starts at:
//       {/* RIGHT SIDEBAR COLUMN */}
//       <div className="w-full xl:w-[320px] shrink-0 flex flex-col gap-6">
//        
//         {/* Notifications */}
//         <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5 flex flex-col h-fit">

// We want to replace it with:
//       {/* BOTTOM ROW: Notifications & Activites */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
//         {/* Notifications */}
//         <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5 flex flex-col h-fit">

// And then we need to replace the <hr> with closing the first div and starting the second div!
//           <hr className="border-[#d4af37]/20 my-2" />
// becomes:
//         </div>
//         {/* Activités */}
//         <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5 flex flex-col h-fit">

// And then remove the extra </div> for the old right sidebar!

code = code.replace(
  '      {/* RIGHT SIDEBAR COLUMN */}\n      <div className="w-full xl:w-[320px] shrink-0 flex flex-col gap-6">\n        \n        {/* Notifications */}\n        <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5 flex flex-col h-fit">',
  '      {/* BOTTOM ROW: Notifications & Activites */}\n      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">\n        \n        {/* Notifications */}\n        <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5 flex flex-col h-fit">'
);

code = code.replace(
  '          <hr className="border-[#d4af37]/20 my-2" />',
  '        </div>\n        \n        <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-5 flex flex-col h-fit">'
);

// Right sidebar used to end with:
//         </div>
//
//       </div>
//       
//             
//       </div>
//       </div>
//     </AdminPageShell>
//
// Wait! If I replaced `RIGHT SIDEBAR COLUMN` wrapper with `grid-cols-2` wrapper, it STILL needs a closing div!
// So I don't need to remove any closing divs at the end! It just matches exactly!
// Wait! I want to REMOVE the `xl:flex-row` from the main container so it's a single column!
code = code.replace(
  '<div className="flex flex-col xl:flex-row gap-8 w-full">',
  '<div className="flex flex-col gap-8 w-full">'
);

fs.writeFileSync('src/modules/dashboard/ui/AdminDashboardMain.tsx', code);
