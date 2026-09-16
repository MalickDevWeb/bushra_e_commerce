import { AdminPageShell } from "@/shared/ui/AdminPageShell";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";

type User = {
  name: string;
  email: string;
  role: string;
  status: "Actif";
};

const users: User[] = [
  { name: "Admin Principal", email: "contact@bushra.sn", role: "Administrateur", status: "Actif" },
  { name: "Ousmane Livreur", email: "ousmane@bushra.sn", role: "Logistique", status: "Actif" },
];

const tableHeaders = ["Nom", "Email", "Rôle", "Actions"] as const;

function UserRow({ user }: { user: User }) {
  return (
    <tr className="hover:bg-[#d4af37]/5 transition-colors">
      <td className="py-4 px-5 text-[14px] font-bold text-[#e8e1d3] font-serif">{user.name}</td>
      <td className="py-4 px-5 text-[13px] text-[#a89b82]">{user.email}</td>
      <td className="py-4 px-5 text-[12px] text-[#d4af37]">{user.role}</td>
      <td className="py-4 px-5 text-right">
        <button type="button" className="text-[#a89b82] hover:text-[#d4af37] text-sm">
          Gérer
        </button>
      </td>
    </tr>
  );
}

export default function AdminUsersManagement() {
  return (
    <AdminPageShell>
      <AdminPageHeader
        title="Utilisateurs & Rôles"
        description="Gérez les accès à ce tableau de bord"
        action={<button type="button" className="px-4 py-2 bg-[#d4af37] text-[#0a0a0a] rounded-md font-semibold text-sm hover:bg-[#c59b32] transition-colors">Inviter un utilisateur</button>}
      />

      <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl overflow-hidden mt-2">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#d4af37]/20 bg-[#1c1813]">
              {tableHeaders.map((header) => (
                <th
                  key={header}
                  className={`py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82] ${
                    header === "Actions" ? "text-right" : ""
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#d4af37]/10">
            {users.map((user) => (
              <UserRow key={`${user.email}-${user.name}`} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </AdminPageShell>
  );
}

