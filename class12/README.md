### Step 1: Install Dependencies

You need to install the required dependencies to use PostgreSQL with Vercel and Drizzle ORM.

1. Install Vercel's PostgreSQL client:

   ```bash
   npm i @vercel/postgres
   ```

2. Install the latest version of Vercel globally:
   ```bash
   npm i -g vercel@latest
   ```

These commands set up the tools required to interact with the Vercel PostgreSQL database.

### Step 2: Deploy Project on Vercel

Before interacting with the database, you need to deploy the project on Vercel. This allows your project to be hosted and connected to Vercel's PostgreSQL service.

Run the following command to deploy the project:

```bash
npx vercel
```

This will guide you through the deployment process, ensuring the project is linked to your Vercel account.

### Step 3: Create a PostgreSQL Database on Vercel

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Select your project from the list.
3. Navigate to the **Storage** section.
4. Create a new PostgreSQL database for your project.

### Step 4: Set Up Environment Variables

To connect your local development environment to Vercel's PostgreSQL database, you need to pull the environment variables from Vercel:

```bash
vercel env pull .env
```

This will create a `.env` file with the necessary database connection information.

### Step 5: Create Database Table via API

To create a table in your PostgreSQL database, you can define an API route using the following code inside `src/app/api/table-create/route.ts`:

```ts
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await sql`CREATE TABLE IF NOT EXISTS todonew2 (
            ID SERIAL PRIMARY KEY,
            Title VARCHAR(255) NOT NULL,
            IsCompleted BOOLEAN DEFAULT FALSE
        )`;
    return NextResponse.json({ res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
```

- This code defines a `GET` request that creates a table called `todonew2` with columns `ID`, `Title`, and `IsCompleted`.
- The `SERIAL` type automatically generates an auto-incremented primary key.

### Step 6: CRUD Operations Using SQL via API

You can define an API route using the following code inside `src/app/api/crud-operation/route.ts`:
Next, we define CRUD (Create, Read, Update, Delete) operations on this table using `@vercel/postgres` for SQL queries.

1. **GET (Read)**:
   Retrieves all records from the `todonew2` table:

   ```ts
   export async function GET() {
     try {
       const { rows } = await sql`SELECT * FROM todonew2`;
       return NextResponse.json(rows, { status: 200 });
     } catch (error) {
       return NextResponse.json({ error }, { status: 500 });
     }
   }
   ```

2. **POST (Create)**:
   Adds a new record to the `todonew2` table:

   ```ts
   export async function POST(req: NextRequest) {
     try {
       const { id, title, isCompleted } = await req.json();
       const { rows } = await sql`
         INSERT INTO todonew2 (id, title, isCompleted) 
         VALUES (${id}, ${title}, ${isCompleted}) 
         RETURNING *`;
       return NextResponse.json(rows, { status: 200 });
     } catch (error) {
       return NextResponse.json(error, { status: 500 });
     }
   }
   ```

3. **PUT (Update)**:
   Updates an existing record in the `todonew2` table:

   ```ts
   export async function PUT(req: NextRequest) {
     try {
       const { id, title, isCompleted } = await req.json();
       const { rows } = await sql`
         UPDATE todonew2 
         SET title = ${title}, isCompleted = ${isCompleted} 
         WHERE id = ${id} 
         RETURNING *`;
       return NextResponse.json(rows, { status: 200 });
     } catch (error) {
       return NextResponse.json(error, { status: 500 });
     }
   }
   ```

4. **DELETE (Delete)**:
   Deletes a record from the `todonew2` table:
   ```ts
   export async function DELETE(req: NextRequest) {
     try {
       const { id } = await req.json();
       const { rows } = await sql`
         DELETE FROM todonew2 
         WHERE id = ${id} 
         RETURNING *`;
       return NextResponse.json(rows, { status: 200 });
     } catch (error) {
       return NextResponse.json(error, { status: 500 });
     }
   }
   ```

### Step 7: Set Up Drizzle ORM

## Why Do We Need ORM?

An ORM (Object-Relational Mapping) is a tool that allows developers to interact with a database using the programming language's own syntax and structures instead of writing raw SQL queries.

## Why Do We Need the Drizzle ORM?

Drizzle ORM is a modern ORM for JavaScript and TypeScript applications. Here's why it's beneficial:

- Type Safety: Drizzle provides strong type definitions, which means errors can be caught at compile time rather than at runtime.
- Ease of Use: It offers a clean and intuitive API that makes database operations straightforward.
- Performance: Designed with performance in mind, Drizzle generates optimized queries.
- Flexibility: Supports various databases and integrates well with modern frameworks.
- Maintainability: Simplifies code maintenance by providing a consistent way to interact with the database.

**Drizzle vs. SQL Query**

- **Raw SQL Queries**:

  - **Pros**:
    - Full control over the SQL being executed.
    - Potentially better for very complex queries.
  - **Cons**:
    - Prone to errors like typos or syntax mistakes.
    - Higher risk of SQL injection if not handled properly.
    - Less readable and harder to maintain.
    - No type safety, increasing the chance of runtime errors.

- **Drizzle ORM**:
  - **Pros**:
    - Improved readability with a fluent API.
    - Strong type checking helps catch errors early.
    - Protects against SQL injection by handling parameterization internally.
    - Easier to maintain and refactor code.
  - **Cons**:
    - May have a learning curve for those unfamiliar with ORMs.
    - Slight overhead compared to raw SQL.

---

Drizzle ORM allows you to interact with PostgreSQL in a more structured way. First, install the necessary Drizzle dependencies:

```bash
npm i drizzle-orm
npm i -D drizzle-kit
```

### Step 8: Define Schema Using Drizzle ORM

Create a schema for your table in `src/db/schema.ts`:

```ts
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { boolean, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const db = drizzle(sql);

export const Todo = pgTable("todonew2", {
  id: serial("id").primaryKey(),
  title: varchar("title1", { length: 256 }).notNull(),
  isCompleted: boolean("is_completed").default(false),
});
```

This schema defines the `Todo` table with three fields: `id`, `title`, and `isCompleted`.

### Step 9: Configure Drizzle

Configure Drizzle ORM by creating a configuration file `drizzle.config.ts`:

```ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
```

This configuration specifies the schema file and database connection.

### Step 10: CRUD Operations Using Drizzle ORM via API

You can define an API route using the following code inside `src/app/api/crud-operation-drizzle/route.ts`.
With Drizzle, CRUD operations become simpler and more readable:

1. **GET (Read)**:

   ```ts
   export async function GET() {
     try {
       const rows = await db.select().from(Todo);
       return NextResponse.json(rows, { status: 200 });
     } catch (error) {
       return NextResponse.json({ error }, { status: 500 });
     }
   }
   ```

2. **POST (Create)**:

   ```ts
   export async function POST(req: NextRequest) {
     try {
       const { id, title, isCompleted } = await req.json();
       const rows = await db
         .insert(Todo)
         .values({ id, title, isCompleted })
         .returning();
       return NextResponse.json(rows, { status: 200 });
     } catch (error) {
       return NextResponse.json(error, { status: 500 });
     }
   }
   ```

3. **PUT (Update)**:

   ```ts
   export async function PUT(req: NextRequest) {
     try {
       const { id, title, isCompleted } = await req.json();
       const rows = await db
         .update(Todo)
         .set({ title, isCompleted })
         .where(eq(Todo.id, id))
         .returning();
       return NextResponse.json(rows, { status: 200 });
     } catch (error) {
       return NextResponse.json(error, { status: 500 });
     }
   }
   ```

4. **DELETE (Delete)**:
   ```ts
   export async function DELETE(req: NextRequest) {
     try {
       const { id } = await req.json();
       const rows = await db.delete(Todo).where(eq(Todo.id, id)).returning();
       return NextResponse.json(rows, { status: 200 });
     } catch (error) {
       return NextResponse.json(error, { status: 500 });
     }
   }
   ```

### Step 11: Generate the SQL Migration File

Once you have your schema defined in Drizzle ORM, you need to generate a SQL migration file. This file will contain the SQL statements required to bring your database schema in sync with the Drizzle ORM schema.

To generate the migration file, run the following command:

```bash
npx drizzle-kit generate
```

#### What Happens Here:

- **Drizzle ORM** will look at the schema you've defined in your code (`src/db/schema.ts`) and generate the SQL statements required to create or modify your PostgreSQL database tables.
- The generated file will be placed in the location specified in the `out` field of your `drizzle.config.ts` file (by default, this is the `./drizzle` folder).

### Step 12: Apply the Migrations to the Database

Once the migration file is generated, you can apply the changes to your database by running the migration command:

```bash
npx drizzle-kit migrate
```

#### What Happens Here:

- **Drizzle ORM** will run the SQL migration file against your PostgreSQL database.
- It will create or modify the database according to the SQL statements generated from your defined schema.
- This process ensures that your database is always in sync with the structure defined in your code i.e. schema.

By running these commands in **Step 11** and **Step 12**, you automate the process of keeping your database schema in sync with your application's data models.

### Why Migration is Important:

- When working with databases, it's essential to ensure that the database schema (the tables, columns, and data types) matches what your application expects.
- By generating migration files and running them, you can easily track and apply changes to the database structure, making development smoother and minimizing potential errors.

With these steps, you have set up a full CRUD API using PostgreSQL with both SQL queries and Drizzle ORM in a Next.js application, deployable via Vercel.

## Read more

- [Todo App](https://orm.drizzle.team/docs/tutorials/drizzle-nextjs-neon)
- [Drizzle Queries + CRUD](https://orm.drizzle.team/docs/data-querying)
-
