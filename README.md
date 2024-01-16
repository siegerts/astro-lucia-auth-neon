# Astro Starter Kit + Lucia Auth + Neon Serverless Postgres

This project uses the Astro StarterKit configured with [Lucia Auth](https://lucia-auth.com/) + Prisma with [Neon Postgres](https://neon.tech) as the database. The database can be used for queries and data fetching outside of the auth mechanisms.

The [serverless driver](https://github.com/neondatabase/serverless) is used for Neon Postgres. This is integrated with Prisma via the ` previewFeatures = ["driverAdapters"]` in the `schema.prisma` file. Prisma Client setup is located in `./lib/prisma.ts`.

```ts
import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import ws from "ws";

dotenv.config();
neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.DATABASE_URL}`;

const pool = new Pool({ connectionString });
const adapter = new PrismaNeon(pool);

let sql = (global as any).sql || new PrismaClient({ adapter });

if (process.env.NODE_ENV === "development") (global as any).sql = sql;

export default sql;
```

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```diff
/
+ ├── lib/
+ │   ├── lucia.ts
+ │   └── prisma.ts
+ ├── prisma/
+ │   └── schema.prisma
  ├── public/
  │   └── favicon.svg
  ├── src/
  │   ├── components/
  │   │   └── Card.astro
  │   ├── layouts/
  │   │   └── Layout.astro
  │   └── pages/
  │       ├── api/
+ │       │   ├── logout.ts
+ │       │   └── hello-protected.ts
+ │       ├── middleware.ts
+ │       ├── login.astro
+ │       ├── signup.astro
  │       └── index.astro
  └── package.json
```

## Getting Started

1. Install the dependencies:

```
pnpm install
```

2. Add your Neon Postgres database URL as an Environment Variable

```
DATABASE_URL="<>"
```

3. Generate the Prisma Client

```
npx prisma generate
```

4. Push the schema to your database

```
npx prisma db push
```

5. Run the server

```
pnpm dev
```

## Environments and Postgres Database Branch

To use a different database branch for each environment (dev / prod). Create a corresponding environment variable dotenv file (`.env.development` or `.env.production`) with the database branch connection URL.
