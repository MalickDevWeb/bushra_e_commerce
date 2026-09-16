const fs = require('fs');
let code = fs.readFileSync('src/modules/dashboard/ui/AdminDashboardMain.tsx', 'utf-8');

const startIndex = code.indexOf('{/* ROW 5: BOTTOM WIDGETS */}');
if (startIndex !== -1) {
  // Find where it ends. It's the 3 widgets. 
  // It's just before the closing </div> of the left column.
  // We can just find the end of "Top catégories" div.
  const endMarker = '          </div>\n        </div>\n      </div>';
  const endIndex = code.indexOf(endMarker, startIndex);
  if (endIndex !== -1) {
    code = code.substring(0, startIndex) + code.substring(endIndex + endMarker.length);
    fs.writeFileSync('src/modules/dashboard/ui/AdminDashboardMain.tsx', code);
    console.log("Removed ROW 5");
  } else {
    console.log("Could not find end marker");
  }
} else {
  console.log("Could not find ROW 5");
}
