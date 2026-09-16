# Architecture Diagram

Bushra is a Next.js storefront and administration application organized by business modules. The same deployment serves public shopping experiences and protected admin and super-admin workspaces, with Prisma and Neon providing persistence and Cloudinary providing media storage.

## Application Architecture

<!-- mermaid-checked: no \n, no em-dash/en-dash, no {} in labels, subgraphs are id["label"], arrows are -->|"label"|, all subgraphs closed by end, ids unique -->
~~~mermaid
flowchart TD
    subgraph ClientLayer["Client Layer"]
        Browser["Web Browser"]
        AdminBrowser["Admin Browser"]
    end
    subgraph AppLayer["Next.js Application"]
        PublicUI["Public Storefront"]
        AdminUI["Admin Workspace"]
        Auth["Middleware and Auth"]
        Actions["Server Actions"]
    end
    subgraph DataLayer["Persistence Layer"]
        Prisma["Prisma Client"]
        Neon[("Neon PostgreSQL")]
    end
    subgraph MediaLayer["External Media"]
        Cloudinary["Cloudinary Media"]
    end

    Browser -->|"browse and checkout"| PublicUI
    AdminBrowser -->|"manage store"| AdminUI
    PublicUI -->|"server calls"| Actions
    AdminUI -->|"protected calls"| Auth
    Auth -->|"authorize"| Actions
    Actions -->|"ORM queries"| Prisma
    Prisma -->|"SQL"| Neon
    PublicUI -->|"media URLs"| Cloudinary
    AdminUI -->|"upload media"| Cloudinary
~~~

### Technology Stack Summary

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| Runtime | Node.js | >=20.9 | Application runtime |
| Web framework | Next.js | 16.3.4 | App Router, server rendering, middleware, server actions |
| UI | React | 19.2.8 | Public and admin interfaces |
| Styling and icons | Tailwind CSS, Lucide React | 4.1, 1.46 | Responsive styling and interface icons |
| Data access | Prisma Client | 5.22 generated client | Type-safe PostgreSQL access |
| Database | Neon PostgreSQL | Managed service | Persistent users, catalog, and orders |
| Media | Cloudinary and next-cloudinary | 2.11, 6.19 | Image upload and delivery |
| Authentication | jose and bcryptjs | 6.2, 3.0 | JWT session validation and password hashing |
| Notifications | Sonner | 2.0 | Client feedback for admin actions |

### Data Storage & External Services

Neon PostgreSQL stores the Prisma entities and relationships. Cloudinary stores binary images and returns secure URLs persisted in product and category records. No Redis, message broker, or external payment provider is wired into the scanned runtime data layer.

### Key Architectural Decisions

- Uses App Router pages with module-oriented UI components for public, catalog, orders, clients, content, and administration.
- Uses middleware for fast session-token checks and server-side `requireAdmin` or `requireSuperAdmin` checks for database-backed authorization.
- Uses server actions as the mutation boundary, followed by Next.js path revalidation instead of a separate client cache.

## Component Relationships

<!-- mermaid-checked: no \n, no em-dash/en-dash, no {} in labels, subgraphs are id["label"], arrows are -->|"label"|, all subgraphs closed by end, ids unique -->
~~~mermaid
flowchart LR
    subgraph cPresentation["Presentation"]
        cPublic["Public Pages"]
        cCatalog["Catalog Components"]
        cCheckout["Cart and Checkout"]
        cAdmin["Admin Pages"]
        cSuper["Super Admin Pages"]
    end
    subgraph cBusiness["Business Logic"]
        cProductActions["Product Actions"]
        cCategoryActions["Category Actions"]
        cStaffActions["Staff Actions"]
        cAuthActions["Auth Actions"]
    end
    subgraph cData["Data Access"]
        cPrisma["Prisma Singleton"]
        cSchema["Prisma Schema"]
    end
    subgraph cInfra["Infrastructure"]
        cMiddleware["Auth Middleware"]
        cSession["Session Verification"]
        cCloudinary["Cloudinary Upload"]
        cNeon["Neon PostgreSQL"]
    end

    cPublic -->|"renders"| cCatalog
    cCatalog -->|"reads and mutates"| cProductActions
    cCheckout -->|"submits orders"| cProductActions
    cAdmin -->|"manages catalog"| cProductActions
    cAdmin -->|"manages staff"| cStaffActions
    cSuper -->|"manages protected settings"| cStaffActions
    cAdmin -->|"manages categories"| cCategoryActions
    cPublic -->|"sign in and register"| cAuthActions
    cMiddleware -.->|"guards admin routes"| cAdmin
    cMiddleware -.->|"guards super admin routes"| cSuper
    cSession -->|"validates tokens"| cAuthActions
    cProductActions -->|"queries"| cPrisma
    cCategoryActions -->|"queries"| cPrisma
    cStaffActions -->|"queries"| cPrisma
    cPrisma -->|"uses schema"| cSchema
    cPrisma -->|"SQL"| cNeon
    cCategoryActions -->|"uploads media"| cCloudinary
~~~

### Component Inventory

| Component | Layer | Type | Responsibility |
|---|---|---|---|
| Public Pages | Presentation | Next.js route pages | Home, boutique, collections, product, account, contact, cart, and tracking experiences |
| Catalog Components | Presentation | React components | Product grids, category filters, product details, and media presentation |
| Cart and Checkout | Presentation | React components | Cart state presentation and checkout form submission |
| Admin Pages | Presentation | React admin components | Product, category, order, client, communication, and content administration |
| Super Admin Pages | Presentation | React admin components | Staff, finance, security, configuration, and privileged administration |
| Product Actions | Business Logic | Server actions | Product reads and product creation with path revalidation |
| Category Actions | Business Logic | Server actions | Category creation, editing, deletion, validation, and media URL persistence |
| Staff Actions | Business Logic | Server actions | Super-admin staff account management |
| Auth Actions | Business Logic | Server actions | Login, registration, session creation, and logout |
| Prisma Singleton | Data Access | Prisma client | Shared database client for server-side queries |
| Prisma Schema | Data Access | ORM schema | User, category, product, order, and order item models |
| Auth Middleware | Infrastructure | Next middleware | Protects admin routes and checks JWT role claims |
| Session Verification | Infrastructure | Auth helper | Verifies JWT and checks the current user role in Neon |
| Cloudinary Upload | Infrastructure | External integration | Stores uploaded images and returns secure URLs |
| Neon PostgreSQL | Infrastructure | Managed database | Durable relational persistence |
