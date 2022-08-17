# Project:Car

Project:car is a website designed to create car profiles, sell items on the marketplace, and locate events for car groups! This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
This application is also using [mantine.dev](https://mantine.dev/) for the UI.

## Getting Started

First, create a Supabase project with no pre loaded tables inside, Prisma will handle this. Also don't forget to enable logins at this time. Prisma may have issues with connection pooling with the free tier, so you might have to disable it in order to migrate successfully.

Create a `.env` file in the root directory and fill in these credentials:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
DATABASE_URL=
```

### RLS Policies

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

### Linting

Eslint has been setup to automatically pre stage fix any linting issues, (not warnings though!), if you would like to see any linting issues, you can run `yarn lint` to output any warnings or errors you may have.

## Contributing

Like to contribute to my project? Make a PR! Or if you have any questions, please reach out to me!
