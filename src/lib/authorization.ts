import { requireAdmin, requireSuperAdmin } from "@/lib/auth";

export const permissions = {
  PRODUCT_CREATE: "PRODUCT_CREATE",
  PRODUCT_UPDATE: "PRODUCT_UPDATE",
  PRODUCT_DELETE: "PRODUCT_DELETE",
  CATEGORY_CREATE: "CATEGORY_CREATE",
  CATEGORY_UPDATE: "CATEGORY_UPDATE",
  CATEGORY_DELETE: "CATEGORY_DELETE",
  ORDER_UPDATE: "ORDER_UPDATE",
  STAFF_MANAGE: "STAFF_MANAGE",
} as const;

export type Permission = (typeof permissions)[keyof typeof permissions];

const adminPermissions = new Set<Permission>([
  permissions.PRODUCT_CREATE,
  permissions.PRODUCT_UPDATE,
  permissions.PRODUCT_DELETE,
  permissions.CATEGORY_CREATE,
  permissions.CATEGORY_UPDATE,
  permissions.CATEGORY_DELETE,
  permissions.ORDER_UPDATE,
]);

export async function requirePermission(permission: Permission) {
  const admin = await requireAdmin();
  if (!admin) return null;
  if (admin.role === "SUPER_ADMIN" || adminPermissions.has(permission)) return admin;
  return null;
}

export async function requireSuperAdminPermission(permission: Permission) {
  if (permission !== permissions.STAFF_MANAGE) return null;
  return requireSuperAdmin();
}
