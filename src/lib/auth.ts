import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import prisma from './prisma';

// Le secret pour crypter les sessions
const secretKey = process.env.JWT_SECRET || 'une_cle_secrete_ultra_longue_pour_bushra_en_dev';
const key = new TextEncoder().encode(secretKey);

// Type pour notre session
export type SessionPayload = {
  userId: string;
  role: string;
  expiresAt: Date;
};

// 1. Créer une session (lors de la connexion)
export async function createSession(userId: string, role: string) {
  const expiresAt = new Date(Date.now() + 2 * 60 * 60 * 1000); // 2 heures

  const session = await new SignJWT({ userId, role })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(key);

  const cookieStore = await cookies();
  cookieStore.set('session', session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    expires: expiresAt,
    path: '/',
  });
}

// 2. Vérifier et déchiffrer la session depuis le cookie
export async function verifySessionToken() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get('session')?.value;
  if (!cookie) return null;

  try {
    const { payload } = await jwtVerify(cookie, key, {
      algorithms: ['HS256'],
    });
    return payload as SessionPayload;
  } catch {
    return null;
  }
}

// 3. Supprimer la session (Déconnexion)
export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}

// ==========================================
// FAILLES CORRIGÉES : VÉRIFICATIONS AVEC LA BASE DE DONNÉES
// ==========================================

// Fonction pour vérifier si l'utilisateur est un ADMIN (ou SUPER_ADMIN) actif
export async function requireAdmin() {
  const payload = await verifySessionToken();
  if (!payload) return null;

  // Vérification en direct dans la base Neon (révocation immédiate)
  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
    select: { id: true, role: true }
  });

  if (!user || (user.role !== 'ADMIN' && user.role !== 'SUPER_ADMIN')) {
    return null;
  }

  return user;
}

// Fonction pour vérifier si l'utilisateur est strictement SUPER_ADMIN
export async function requireSuperAdmin() {
  const payload = await verifySessionToken();
  if (!payload) return null;

  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
    select: { id: true, role: true }
  });

  if (!user || user.role !== 'SUPER_ADMIN') {
    return null;
  }

  return user;
}
