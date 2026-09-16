const fs = require('fs');

// 1. Update AdminTopbar.tsx
let topbarCode = fs.readFileSync('src/shared/layouts/AdminTopbar.tsx', 'utf-8');
topbarCode = topbarCode.replace('export function AdminTopbar() {', `interface AdminTopbarProps {
  onToggleSidebar?: () => void;
}

export function AdminTopbar({ onToggleSidebar }: AdminTopbarProps) {`);
topbarCode = topbarCode.replace(
  '<button className="text-[#d4af37] hover:text-[#e8e1d3] transition-colors focus:outline-none shrink-0">',
  '<button onClick={onToggleSidebar} className="text-[#d4af37] hover:text-[#e8e1d3] transition-colors focus:outline-none shrink-0">'
);
fs.writeFileSync('src/shared/layouts/AdminTopbar.tsx', topbarCode);


// 2. Update AdminShell.tsx
let adminShellCode = fs.readFileSync('src/shared/layouts/AdminShell.tsx', 'utf-8');
adminShellCode = adminShellCode.replace('export function AdminShell({ children }: AdminShellProps) {', `import { useState } from "react";\n\nexport function AdminShell({ children }: AdminShellProps) {\n  const [isSidebarOpen, setIsSidebarOpen] = useState(true);`);
adminShellCode = adminShellCode.replace(
  '<aside className="w-[250px] shrink-0 border-r border-[#d4af37]/10 bg-[#0a0a0a] hidden lg:flex flex-col">',
  '<aside className={`shrink-0 border-r border-[#d4af37]/10 bg-[#0a0a0a] hidden lg:flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? "w-[250px]" : "w-0 overflow-hidden border-none"}`}>\n        <div className="w-[250px] h-full">'
);
adminShellCode = adminShellCode.replace(
  '<AdminSidebar />\n      </aside>',
  '<AdminSidebar />\n        </div>\n      </aside>'
);
adminShellCode = adminShellCode.replace(
  '<AdminTopbar />',
  '<AdminTopbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />'
);
fs.writeFileSync('src/shared/layouts/AdminShell.tsx', adminShellCode);

