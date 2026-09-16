import { staffRepository } from "@/modules/admin/repositories/staff.repository";

export const staffService = {
  async createAdmin(data: { name: string; email: string; password: string }) {
    const existing = await staffRepository.findByEmail(data.email);
    if (existing) return { success: false as const, error: "Cet email est déjà associé à un compte." };
    await staffRepository.createAdmin(data);
    return { success: true as const };
  },

  async toggleStatus(userId: string, currentUserId: string, currentRole: string) {
    if (userId === currentUserId) return { success: false as const, error: "Vous ne pouvez pas modifier votre propre compte." };
    await staffRepository.updateRole(userId, currentRole === "ADMIN" ? "DISABLED" : "ADMIN");
    return { success: true as const };
  },

  async deleteAdmin(userId: string, currentUserId: string) {
    if (userId === currentUserId) return { success: false as const, error: "Vous ne pouvez pas supprimer votre propre compte." };
    await staffRepository.delete(userId);
    return { success: true as const };
  },
};
