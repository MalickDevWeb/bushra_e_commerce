# Bushra

Application **Next.js** modulaire, orientée performance, avec séparation claire **frontend / backend** et couches **core**, **shared**, **utils**.

## Prérequis

- Node.js **≥ 20.9** (requis par Next.js 16)
- npm, pnpm ou yarn

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Architecture

```
src/
├── app/                      # Couche Next.js (routing)
│   ├── (frontend)/           # Pages UI (Server Components)
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── users/page.tsx
│   ├── api/v1/               # Backend (Route Handlers)
│   │   ├── health/route.ts
│   │   └── users/route.ts
│   ├── layout.tsx
│   └── globals.css
│
├── core/                     # Logique métier (sans React)
│   ├── api/                  # Helpers HTTP (réponses JSON)
│   └── modules/
│       └── user/             # Module métier exemple
│           ├── user.types.ts
│           ├── user.repository.ts
│           └── user.service.ts
│
├── shared/                   # Code partagé frontend + backend
│   ├── components/
│   ├── constants/
│   └── types/
│
└── utils/                    # Fonctions pures réutilisables
    ├── cn.ts
    ├── format.ts
    └── validation.ts
```

## Principes

| Couche | Rôle | Importable depuis |
|--------|------|-------------------|
| **app/(frontend)** | Pages, layouts, UI server-side | `core`, `shared`, `utils` |
| **app/api** | Endpoints REST | `core`, `shared`, `utils` |
| **core** | Domaine, services, repositories | `utils` uniquement |
| **shared** | Composants, types, constantes | `utils` |
| **utils** | Helpers purs, sans dépendances métier | — |

### Flux de données performant

1. **Server Components** appellent directement `core` (pas de round-trip HTTP interne).
2. **Route Handlers** (`/api/v1/*`) exposent la même logique pour clients externes ou fetch côté client.
3. **`revalidate`** sur les pages pour le cache ISR.

## Alias TypeScript

```ts
import { userService } from "@/core/modules/user";
import { Button } from "@/shared/components";
import { formatDate } from "@/utils/format";
```

## API

| Méthode | Route | Description |
|---------|-------|-------------|
| GET | `/api/v1/health` | Santé de l'application |
| GET | `/api/v1/users` | Liste des utilisateurs |
| POST | `/api/v1/users` | Créer un utilisateur |

## Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Dev avec Turbopack |
| `npm run build` | Build production |
| `npm run start` | Serveur production |
| `npm run lint` | ESLint |
| `npm run typecheck` | Vérification TypeScript |

## Ajouter un module métier

1. Créer `src/core/modules/<nom>/` avec `types`, `repository`, `service`.
2. Exporter depuis `src/core/modules/<nom>/index.ts`.
3. Ajouter une route API dans `src/app/api/v1/<nom>/`.
4. Créer la page UI dans `src/app/(frontend)/<nom>/`.

## Performance

- App Router + React Server Components
- Turbopack en développement
- `optimizePackageImports` pour tree-shaking des composants
- Images AVIF/WebP via `next/image`
- Fonts avec `display: swap`
- Cache ISR via `revalidate`
