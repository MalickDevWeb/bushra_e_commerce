import { PrismaClient } from "@prisma/client";

function normalizeDatabaseUrl() {
	const rawUrl = process.env.DATABASE_URL;
	if (!rawUrl) return;

	try {
		const databaseUrl = new URL(rawUrl);
		databaseUrl.searchParams.set("connect_timeout", "30");
		databaseUrl.searchParams.set("channel_binding", "disable");
		process.env.DATABASE_URL = databaseUrl.toString();
	} catch {}
}

normalizeDatabaseUrl();

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient({
	errorFormat: "minimal",
});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
