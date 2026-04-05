# DevTube Academy

This is a simple online course platform built with Next.js.

## Getting Started

First, set up your environment and database:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Create your environment file:**
    Copy the `.env.example` file to a new file named `.env` and fill in the required `JWT_SECRET_KEY`.
    ```bash
    cp .env.example .env
    ```

3.  **Set up and seed the database:**
    This command will create the SQLite database file and populate it with initial data.
    ```bash
    npx prisma migrate dev --name init
    ```

Now, you can run the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

You can register a new user. To get authorized access to the course, you can manually edit the `prisma/dev.db` file and set the `isAuthorized` flag for your user to `1`.

## Tech Stack

-   [Next.js](https://nextjs.org/) (App Router)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Prisma](https://www.prisma.io/)
-   [SQLite](https://www.sqlite.org/)
