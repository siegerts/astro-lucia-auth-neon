# Astro Starter Kit + Lucia Auth + Neon Serverless Postgres

This project uses the Astro StarterKit with a few extra files for Lucia + Prisma with [Neon Postgres](https://neon.tech) as the database.

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
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
DATABASE_URL=<>
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
