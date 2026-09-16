const fs = require('fs');
let code = fs.readFileSync('src/modules/dashboard/ui/AdminDashboardMain.tsx', 'utf-8');

// I will find where the Notifications card ends, and remove that `</div>`, and instead close it after the timeline.
// The Notifications card ends with:
//               </div>
//             ))}
//           </div>
//         </div>
//           <div className="flex flex-col gap-4 relative">

code = code.replace(
  '              </div>\n            ))}\n          </div>\n        </div>\n          <div className="flex flex-col gap-4 relative">',
  '              </div>\n            ))}\n          </div>\n          \n          <hr className="border-[#d4af37]/20 my-2" />\n          \n          <div className="flex items-center gap-2 mb-1 mt-2">\n            <h2 className="text-sm font-bold text-[#e8e1d3]">Activités récentes</h2>\n          </div>\n          <div className="flex flex-col gap-4 relative">'
);

fs.writeFileSync('src/modules/dashboard/ui/AdminDashboardMain.tsx', code);
