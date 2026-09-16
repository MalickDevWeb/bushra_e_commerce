# Bushra

Application **Next.js** modulaire pour Bushra Thiouraye, avec les routes dans `app`, les domaines dans `modules`, les éléments transversaux dans `shared` et les fonctions pures dans `utils`.

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
├── app/                      # Routes, layouts et fichiers spéciaux Next.js
│   ├── (public)/             # Boutique et parcours client
│   ├── admin/                 # Routes d'administration
│   ├── (dashboard)/           # Routes du dashboard métier
│   ├── api/                   # Route Handlers API
│   ├── layout.tsx
│   └── globals.css
│
├── modules/                  # Fonctionnalités organisées par domaine
│   ├── admin/                # Interfaces d'administration
│   ├── catalog/              # Produits, catégories et stocks
│   ├── clients/              # Clients, avis et messages
│   ├── communication/        # Campagnes, newsletter et notifications
│   ├── content/              # Contenu public et actions produit
│   ├── dashboard/            # Widgets du tableau de bord
│   └── orders/               # Commandes, paiements et livraisons
│
├── core/                     # Infrastructure sans React
│   ├── config/
│   ├── database/
│   ├── errors/
│   ├── http/
│   └── types/
│
├── shared/                   # Éléments réutilisables entre domaines
│   ├── layouts/
│   ├── providers/
│   ├── ui/                   # Primitives UI et composants transversaux
│   ├── constants/
│   └── types/
│
└── utils/                    # Fonctions pures sans dépendance métier
    ├── cn.ts
    ├── date/
    ├── number/
    └── validation/
```

## Principes

| Couche | Rôle | Importable depuis |
|--------|------|-------------------|
| **app** | Routes et composition Next.js | `modules`, `core`, `shared`, `utils` |
| **modules** | UI et logique propres à un domaine | `core`, `shared`, `utils` |
| **app/api** | Route Handlers et contrats HTTP | `modules`, `core`, `shared`, `utils` |
| **core** | Infrastructure et logique sans React | `utils` uniquement |
| **shared** | Composants, layouts et providers transversaux | `utils` |
| **utils** | Helpers purs, sans dépendances métier | — |

### Flux de données performant

1. Les routes `app` composent les écrans et délèguent le comportement aux modules.
2. Les Server Components appellent directement les actions et services nécessaires.
3. Les Route Handlers exposent les contrats destinés aux clients externes.
4. Le service worker et son cache applicatif sont désactivés ; le cache serveur Next.js reste indépendant.

## Alias TypeScript

```ts
import { getProducts } from "@/modules/content/actions/product.actions";
import { DesktopBoutique } from "@/modules/catalog/ui/boutique/DesktopBoutique";
import { Button } from "@/shared/ui/Button";
import { formatCurrency } from "@/utils/number/formatCurrency";
```

## API

| Méthode | Route | Description |
|---------|-------|-------------|
| `POST` | `/api/orders` | Créer une commande avec calcul serveur et réservation atomique du stock |
| `GET` | `/api/orders` | Lister les commandes pour un administrateur authentifié |
| `GET` | `/api/orders/:orderNumber` | Consulter le suivi public d'une commande |
| `POST` | `/api/payments/webhook` | Confirmer un paiement via webhook protégé par `PAYMENT_WEBHOOK_SECRET` |
| `POST` | `/api/contact` | Enregistrer un message client |
| `POST` | `/api/newsletter` | Inscrire une adresse à la newsletter |

Les Server Actions couvrent également les clients, avis, médias, livraisons et réglages CMS. Les intégrations Wave et Orange Money doivent fournir leurs clés et appeler le webhook de paiement.
Les Route Handlers sont regroupés dans `src/app/api`. Le dossier `api/students` est réservé à l'API étudiants en cours d'implémentation.

Après modification du schéma Prisma, synchroniser la base de développement avec `npx prisma db push` ou créer une migration de production avec `npx prisma migrate dev --name backend-domain-foundation`.

## Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Dev avec Turbopack |
| `npm run build` | Build production |
| `npm run start` | Serveur production |
| `npm run lint` | ESLint |
| `npm run typecheck` | Vérification TypeScript |
| `npm run db:push` | Synchronisation Prisma avec Neon |

## Ajouter un module métier

1. Créer `src/modules/<domaine>/` avec les sous-dossiers utiles : `ui`, `actions`, `services`, `repositories`, `types`.
2. Garder dans `src/app` uniquement la route Next.js qui compose le module.
3. Placer les composants réutilisables dans `src/shared/ui` uniquement s'ils servent plusieurs domaines.
4. Placer les fonctions sans React ni dépendance métier dans `src/utils`.
5. Ajouter les Route Handlers correspondants dans `src/app/api` si une API externe est nécessaire.

## Performance

- App Router + React Server Components
- Turbopack en développement
- `optimizePackageImports` pour tree-shaking des composants
- Images AVIF/WebP via `next/image`
- Fonts avec `display: swap`
- Cache ISR via `revalidate`
