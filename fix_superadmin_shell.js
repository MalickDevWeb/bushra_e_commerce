const fs = require('fs');

let shellCode = fs.readFileSync('src/shared/layouts/SuperAdminShell.tsx', 'utf-8');
shellCode = shellCode.replace('export function SuperAdminShell({ children }: SuperAdminShellProps) {', `import { useState } from "react";\n\nexport function SuperAdminShell({ children }: SuperAdminShellProps) {\n  const [isSidebarOpen, setIsSidebarOpen] = useState(true);`);
shellCode = shellCode.replace(
  '<aside className="w-[260px] shrink-0 border-r border-[#d4af37]/10 bg-[#0a0a0a] hidden lg:flex flex-col">',
  '<aside className={`shrink-0 border-r border-[#d4af37]/10 bg-[#0a0a0a] hidden lg:flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? "w-[260px]" : "w-0 overflow-hidden border-none"}`}>\n        <div className="w-[260px] h-full">'
);
shellCode = shellCode.replace(
  '<SuperAdminSidebar />\n      </aside>',
  '<SuperAdminSidebar />\n        </div>\n      </aside>'
);
shellCode = shellCode.replace(
  '<AdminTopbar />',
  '<AdminTopbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />'
);
fs.writeFileSync('src/shared/layouts/SuperAdminShell.tsx', shellCode);
