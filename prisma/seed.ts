/**
 * Script de création du compte Super Admin initial
 * Usage: npx tsx prisma/seed.ts
 */

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Création du compte Super Admin...");

  // Hash du mot de passe
  const hashedPassword = await bcrypt.hash("BushraAdmin2024!", 12);

  // Création ou mise à jour du Super Admin
  const superAdmin = await prisma.user.upsert({
    where: { email: "superadmin@bushra.sn" },
    update: {},
    create: {
      email: "superadmin@bushra.sn",
      name: "Super Admin Bushra",
      password: hashedPassword,
      role: "SUPER_ADMIN",
    },
  });

  console.log("✅ Super Admin créé:", superAdmin.email);
  console.log("📧 Email: superadmin@bushra.sn");
  console.log("🔑 Mot de passe: BushraAdmin2024!");
  console.log("\n⚠️  IMPORTANT: Changez ce mot de passe après la première connexion !");
}

main()
  .catch((e) => {
    console.error("❌ Erreur:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

