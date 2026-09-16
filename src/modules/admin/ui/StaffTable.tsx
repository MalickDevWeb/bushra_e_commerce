"use client";

import { useState } from "react";
import { AdminPageHeader } from "@/shared/ui/AdminPageHeader";
import { CreateAdminModal } from "./CreateAdminModal";
import { toggleAdminStatusAction, deleteAdminAction } from "../actions/staffActions";

type StaffMember = {
  id: string;
  name: string | null;
  email: string;
  role: string;
  createdAt: Date;
};

function getRoleBadge(role: string) {
  if (role === "SUPER_ADMIN") return "bg-[#d4af37]/20 text-[#d4af37] border-[#d4af37]/40";
  if (role === "ADMIN") return "bg-blue-500/10 text-blue-400 border-blue-400/30";
  return "bg-red-500/10 text-red-400 border-red-400/30"; // DISABLED
}

function getRoleLabel(role: string) {
  if (role === "SUPER_ADMIN") return "Super Admin 👑";
  if (role === "ADMIN") return "Admin";
  return "Désactivé";
}

export function StaffTable({ staff }: { staff: StaffMember[] }) {
  const [showModal, setShowModal] = useState(false);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  async function handleToggle(userId: string, currentRole: string) {
    setLoadingId(userId);
    await toggleAdminStatusAction(userId, currentRole);
    setLoadingId(null);
  }

  async function handleDelete(userId: string) {
    if (!confirm("Supprimer définitivement ce compte ? Cette action est irréversible.")) return;
    setLoadingId(userId);
    await deleteAdminAction(userId);
    setLoadingId(null);
  }

  return (
    <>
      {showModal && <CreateAdminModal onClose={() => setShowModal(false)} />}

      <div className="flex flex-col gap-6">
        <AdminPageHeader
          title="Équipe & Accès Admin"
          description="Gérez les comptes ayant accès au tableau de bord"
          action={
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#d4af37] text-[#0a0a0a] rounded-xl font-semibold text-sm hover:bg-[#c29b2b] transition-colors shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Ajouter un Admin
            </button>
          }
        />

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Total membres", value: staff.length, color: "text-[#d4af37]" },
            { label: "Admins actifs", value: staff.filter(s => s.role === "ADMIN").length, color: "text-blue-400" },
            { label: "Désactivés", value: staff.filter(s => s.role === "DISABLED").length, color: "text-red-400" },
          ].map(stat => (
            <div key={stat.label} className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl p-4">
              <p className={`text-2xl font-bold font-serif ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-[#a89b82] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-[#14120f] border border-[#d4af37]/20 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#d4af37]/20 bg-[#1c1813]">
                  {["Membre", "Email", "Rôle", "Créé le", "Actions"].map(h => (
                    <th key={h} className={`py-4 px-5 text-[11px] font-bold uppercase tracking-wider text-[#a89b82] ${h === "Actions" ? "text-right" : ""}`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d4af37]/10">
                {staff.map(user => (
                  <tr key={user.id} className="hover:bg-[#d4af37]/5 transition-colors">
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] font-bold text-xs shrink-0">
                          {(user.name || user.email).substring(0, 2).toUpperCase()}
                        </div>
                        <span className="text-sm font-semibold text-[#e8e1d3]">{user.name || "—"}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-[13px] text-[#a89b82]">{user.email}</td>
                    <td className="py-4 px-5">
                      <span className={`px-2.5 py-1 text-[10px] font-semibold rounded-full border ${getRoleBadge(user.role)}`}>
                        {getRoleLabel(user.role)}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-[13px] text-[#a89b82]">
                      {new Date(user.createdAt).toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" })}
                    </td>
                    <td className="py-4 px-5 text-right">
                      {user.role !== "SUPER_ADMIN" && (
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleToggle(user.id, user.role)}
                            disabled={loadingId === user.id}
                            className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                              user.role === "ADMIN"
                                ? "border-orange-400/30 text-orange-400 hover:bg-orange-400/10"
                                : "border-green-400/30 text-green-400 hover:bg-green-400/10"
                            } disabled:opacity-40`}
                          >
                            {user.role === "ADMIN" ? "Désactiver" : "Réactiver"}
                          </button>
                          <button
                            onClick={() => handleDelete(user.id)}
                            disabled={loadingId === user.id}
                            className="text-xs px-3 py-1.5 rounded-lg border border-red-400/30 text-red-400 hover:bg-red-400/10 transition-colors disabled:opacity-40"
                          >
                            Supprimer
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

