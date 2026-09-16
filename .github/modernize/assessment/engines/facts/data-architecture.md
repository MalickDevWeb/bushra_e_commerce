# Data Architecture & Persistence Layer

Bushra uses one PostgreSQL database hosted on Neon and Prisma Client as its ORM. The current domain model contains five core entities covering identity, catalog, and order management; Cloudinary stores uploaded media while Neon stores the resulting URLs.

## Database Configuration

| Service/Module | DB Type | Profile | Driver | Connection | Migration Tool |
|---|---|---|---|---|---|
| Shared application database | PostgreSQL | All environments using `DATABASE_URL` | Prisma PostgreSQL driver | Neon PostgreSQL through the Prisma datasource | Prisma schema and `prisma db push`; no versioned migration directory detected |
| Local development fallback | SQLite file | Local seed/development tooling | Prisma SQLite client through `prisma/dev.db` | `prisma/dev.db` | Prisma schema; seed scripts in `prisma/seed.js` and `prisma/seed.ts` |

The runtime Prisma singleton is defined in [src/lib/prisma.ts](/home/pmt/bushra/src/lib/prisma.ts). Connection pooling is delegated to the Neon PostgreSQL endpoint and Prisma; no application-level cache or explicit pool-size configuration was detected.

## Data Ownership per Service

| Service | Tables Owned | ORM Framework | Caching | Notes |
|---|---|---|---|---|
| Authentication and administration | `User` | Prisma Client | None detected | User role is used for admin and super-admin authorization |
| Catalog and content | `Category`, `Product` | Prisma Client | None detected | Product media and category media are represented by Cloudinary URLs |
| Orders and checkout | `Order`, `OrderItem` | Prisma Client | None detected | `OrderItem` is the order line entity and cascades on order deletion |

## Entity Model

<!-- mermaid-checked: every attribute is `<type> <name> [<key>] ["<description>"]` with at most one of PK/FK/UK, no \n in descriptions, no {} in descriptions, every relationship label is double-quoted -->
~~~mermaid
erDiagram
    User ||--o{ Order : "places"
    Category ||--o{ Product : "contains"
    Product ||--o{ OrderItem : "appears in"
    Order ||--o{ OrderItem : "contains"
    User {
        string id PK
        string email UK
        string name
        string password
        string role
        dateTime createdAt
        dateTime updatedAt
    }
    Category {
        string id PK
        string name UK
        string slug UK
        string description
        string image
        string status
        dateTime createdAt
        dateTime updatedAt
    }
    Product {
        string id PK
        string name
        string slug UK
        string description
        float price
        int stock
        string image
        boolean isNew
        string categoryId FK
        dateTime createdAt
        dateTime updatedAt
    }
    Order {
        string id PK
        string orderNumber UK
        string userId FK
        string customerName
        string customerPhone
        string address
        string notes
        float totalAmount
        string status
        dateTime createdAt
        dateTime updatedAt
    }
    OrderItem {
        string id PK
        string orderId FK
        string productId FK
        int quantity
        float price
    }
~~~

`Order.userId` is optional, so guest orders are supported. The `OrderItem` relationship to `Order` uses cascade deletion; the product relationship remains protected by the relational constraint. No explicit transaction annotations or transaction wrapper were detected around the current server actions.

## Key Repository Methods

| Service | Repository | Notable Methods | Purpose |
|---|---|---|---|
| Authentication | Direct Prisma access in `src/lib/auth.ts` | `user.findUnique({ where: { id } })` | Validate the current session user and role |
| Administration | Direct Prisma access in `src/modules/admin/actions/staffActions.ts` | `user.findUnique`, `user.create`, `user.update`, `user.delete`, `user.findMany` | Manage staff accounts and roles |
| Catalog | Direct Prisma access in `src/modules/content/actions/product.actions.ts` | `product.findMany`, `category.findMany` with product count, `product.findUnique` | Read catalog data and category product totals |
| Catalog administration | Direct Prisma access in `src/modules/content/actions/product.actions.ts` | `category.create`, `category.findFirst`, `category.update`, `category.delete` | Create, validate, update, and delete categories |
| Orders | No dedicated repository module detected | No custom order query detected in scanned source | Order persistence is represented in the Prisma schema but not yet centralized behind a repository |

## Caching Strategy

No Redis, in-memory cache, Prisma query cache, or HTTP data cache was detected. Prisma is kept as a development singleton to avoid opening multiple clients during hot reload; this is connection lifecycle management rather than result caching. Server actions use Next.js path revalidation after catalog mutations, which invalidates affected rendered data without introducing a second persistence store.

## Data Ownership Boundaries

The application currently uses a shared Neon PostgreSQL database with logical ownership boundaries by module rather than separate databases or schemas. Authentication, catalog, and orders access the same Prisma client and can relate through foreign keys. Cross-module reads occur through direct Prisma relations, such as loading a product with its category or counting products for a category; no service-to-service HTTP data access or CQRS read model was detected.

Cloudinary is an external media store. The application uploads media to Cloudinary and persists the returned secure URL in `Category.image` or `Product.image`; the database remains the source of entity metadata while Cloudinary remains the source of binary media.

### Data Classification & Sensitivity

| Entity | Sensitive Fields | Classification (PII/PHI/PCI/None) | Controls in Place |
|---|---|---|---|
| User | `email`, `name`, `password` | PII | Role checks and password hashing are present; field-level encryption or masking was not detected |
| Order | `customerName`, `customerPhone`, `address` | PII | Admin authorization is present; field-level encryption, masking, and retention policies were not detected |
| OrderItem | None | None | Relational access control only |
| Product | Product descriptions and media URLs | None | Admin authorization for mutations; Cloudinary URL storage |
| Category | Category descriptions and media URLs | None | Admin authorization for mutations; Cloudinary URL storage |

No payment card fields were found in the Prisma model, so no PCI data is currently represented. Password values must remain hashed and should never be returned in client-facing queries.
