This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, create a Supabase project with no pre loaded tables inside, Prisma will handle this. Also don't forget to enable logins at this time. Prisma may have issues with connection pooling with the free tier, so you might have to disable it in order to migrate successfully.

Create a `.env` file in the root directory and fill in these credentials:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
DATABASE_URL=
```

## RLS Policies

For now, RLS Policies will manually have to be entered. I have placed them inside of `./db`.

Run the development server:

```bash
yarn dev
```

Run migration or deploy migration:

```bash
yarn prisma:migrate
yarn prisma:migrate:deploy
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
