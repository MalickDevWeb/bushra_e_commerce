import re

with open('src/modules/dashboard/ui/AdminDashboardMain.tsx', 'r') as f:
    code = f.read()

# Replace AdminPageShell
code = code.replace('<AdminPageShell className="xl:flex-row">', '<AdminPageShell>\n      <div className="flex flex-col xl:flex-row gap-8 w-full">')

# Extract ROW 5
# ROW 5 starts at {/* ROW 5: BOTTOM WIDGETS */}
row5_start = code.find('{/* ROW 5: BOTTOM WIDGETS */}')
# We need to find the matching closing div for the ROW 5 grid.
# The grid starts with <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 w-full">
grid_start = code.find('<div className="grid', row5_start)
# Let's just find the end of ROW 5 by looking for the end of LEFT MAIN COLUMN
left_col_end = code.find('      </div>\n\n      {/* RIGHT SIDEBAR COLUMN */}')

# The slice is:
row5_chunk = code[row5_start:left_col_end].strip()

# Now remove row5_chunk from the code
code = code.replace(row5_chunk, '')

# Now insert row5_chunk after the flex container of left & right columns
# The flex container ends after RIGHT SIDEBAR COLUMN's closing div.
# RIGHT SIDEBAR COLUMN ends just before </AdminPageShell>
right_sidebar_end = code.find('      </div>\n    </AdminPageShell>')
if right_sidebar_end == -1:
    print("Could not find right sidebar end")
    exit(1)

# We need to insert a closing div for the new flex-row container, THEN row5_chunk
insertion = f"""
      </div>
      
      {row5_chunk}
"""
code = code[:right_sidebar_end] + insertion + code[right_sidebar_end:]

with open('src/modules/dashboard/ui/AdminDashboardMain.tsx', 'w') as f:
    f.write(code)

print("Success")
