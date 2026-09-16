import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const secretKey = process.env.JWT_SECRET || 'une_cle_secrete_ultra_longue_pour_bushra_en_dev';
const key = new TextEncoder().encode(secretKey);

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // On protège uniquement les routes /admin (mais pas /admin/login s'il existe)
  const isProtectedRoute = path.startsWith('/admin') && !path.startsWith('/admin/login');

  if (isProtectedRoute) {
    const cookie = request.cookies.get('session')?.value;
    
    // Pas de cookie ? Dehors !
    if (!cookie) {
      return NextResponse.redirect(new URL('/login', request.nextUrl));
    }

    try {
      // Le middleware lit juste le JWT pour voir s'il est formellement valide.
      // (La vraie vérification de rôle en BDD se fait dans requireAdmin() des pages)
      const { payload } = await jwtVerify(cookie, key, { algorithms: ['HS256'] });
      
      const role = payload.role as string;
      
      // Si on essaie d'aller sur le dashboard Super Admin et qu'on est juste ADMIN, on bloque.
      if (path.startsWith('/admin/super-admin') && role !== 'SUPER_ADMIN') {
        return NextResponse.redirect(new URL('/admin/dashboard', request.nextUrl));
      }

      return NextResponse.next();
    } catch (error) {
      // Token falsifié ou expiré ? Dehors !
      return NextResponse.redirect(new URL('/login', request.nextUrl));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
