# Sanity Setup Guide

This guide will walk you through setting up a new Sanity project, creating schemas, adding data, and integrating it with a Next.js application to display the data.

## Step 00: Sanity Setup

### 1. Initialize a New Sanity Project

Run the following command in your terminal to create a new Sanity project using the clean template:

```bash
npm create sanity@latest -- --template clean --create-project "learning-sanity-project" --dataset production
```

- **Explanation:**
  - `npm create sanity@latest`: Initializes a new Sanity project using the latest version.
  - `--template clean`: Specifies the use of the clean starter template.
  - `--create-project "learning-sanity-project"`: Sets the project name to "learning-sanity-project".
  - `--dataset production`: Creates a dataset named "production".

---

### 2. Create Schemas

In your Sanity project, you'll need to define schemas for your data models.

- **Files to Create:**
  - `product.ts`
  - `category.ts`

- **Instructions:**
  - Place these files in the `schemas` directory of your Sanity project.
  - Define the fields for each schema as per your data requirements.
  - In your `index.ts` file within the `schemas` directory, import both `product.ts` and `category.ts`.

- **Schema Definitions:**

  **`product.ts`:**

  ```typescript
  export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'type', title: 'Type', type: 'string' },
      { name: 'price', title: 'Price', type: 'number' },
      { name: 'image', title: 'Image', type: 'image' },
      { name: 'category', title: 'Category', type: 'reference', to: [{ type: 'category' }] },
    ],
  };
  ```

  **`category.ts`:**

  ```typescript
  export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string' },
    ],
  };
  ```

---

### 3. Run the Sanity Studio

Start the Sanity Studio to manage your content.

- **Command:**

  ```bash
  npm run dev
  ```

- **Access the Studio:**
  - Open your browser and navigate to `http://localhost:3000/studio` to access the Sanity Studio interface.

---

### 4. Add Data

Use the Sanity Studio to add sample data to your `product` and `category` collections.

- **Instructions:**
  - In the Studio, navigate to the `category` schema and add categories.
  - Then, add products under the `product` schema, linking them to the appropriate categories.

---

### 5. Set Up the Sanity Client

Create a `client.ts` file to configure the Sanity client for fetching data.

- **File:** `sanity/lib/client.ts`

- **Code:**

  ```typescript
  import { createClient } from 'next-sanity';

  export const client = createClient({
    token: process.env.SANITY_ACCESS_TOKEN,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: 'v2024-09-25',
    useCdn: true, // Set to false if statically generating pages, using ISR, or tag-based revalidation
  });
  ```

- **Explanation:**
  - `token`: Your Sanity access token, stored in environment variables.
  - `projectId`: Your Sanity project ID, also from environment variables.
  - `dataset`: Specifies the dataset to use (e.g., 'production').
  - `apiVersion`: The API version to use for Sanity queries.
  - `useCdn`: When `true`, uses Sanity's CDN for faster response times.

---

### 6. Update the Image URL Builder

Modify the `image.ts` file to create a URL builder for Sanity images.

- **File:** `sanity/lib/image.ts`

- **Code:**

  ```typescript
  import { createImageUrlBuilder } from 'next-sanity';
  import { client } from './client';

  const builder = createImageUrlBuilder(client);

  export const urlFor = (source) => builder.image(source);
  ```

- **Explanation:**
  - Imports the `client` to access Sanity configurations.
  - Creates a `builder` using `createImageUrlBuilder`.
  - Exports `urlFor` to generate URLs for images stored in Sanity.

---

### 7. Fetch and Display Data in Next.js

Modify your `page.tsx` file to fetch data from Sanity and display it using Next.js components.

- **File:** `pages/page.tsx`

- **Code:**

  ```tsx
  import { client } from '@/sanity/lib/client';
  import { urlFor } from '@/sanity/lib/image';
  import Image from 'next/image';
  import React from 'react';
  import { Image as IImage } from 'sanity';

  // Function to fetch data from Sanity
  export async function getData() {
    // Getting data from Sanity
    const res = await client.fetch(
      `*[_type=="product"]{
        title,
        type,
        price,
        category->{name},
        image,
        "urlImage": image.asset->url,
        id
      }`
    );
    return res;
  }

  // Interface to type the product data
  interface IProduct {
    title: string;
    type: string;
    price: number;
    category: { name: string };
    image: IImage;
    urlImage: string;
  }

  // React component to display products
  const Page = async () => {
    const data = await getData();
    console.log('Data=', data);
    return (
      <div>
        <h1>Sanity</h1>
        {data.map((product: IProduct, index: number) => (
          <div key={index}>
            <h2>{product.title}</h2>
            <p>{product.type}</p>
            <p>{product.price}</p>
            <p>{product.category.name}</p>
            <Image
              src={urlFor(product.image).url()}
              alt={product.title}
              width={300}
              height={400}
            />
          </div>
        ))}
      </div>
    );
  };

  export default Page;
  ```

- **Explanation:**

  - **Imports:**
    - `client`: The Sanity client configured earlier.
    - `urlFor`: Function to generate image URLs.
    - `Image`: Next.js component for optimized images.
    - `React`: For using JSX and React features.
    - `IImage`: Type from Sanity for image objects.

  - **`getData` Function:**
    - Fetches products from Sanity using a GROQ query.
    - Retrieves the `title`, `type`, `price`, linked `category` name, `image`, direct image URL (`urlImage`), and `id`.
    - Returns the result for use in the component.

  - **`IProduct` Interface:**
    - Defines TypeScript types for the product data.
    - Ensures type safety and IntelliSense support in your IDE.

  - **`Page` Component:**
    - An asynchronous React component that fetches data on render.
    - Uses `getData` to fetch the products.
    - Logs the data to the console for debugging.
    - Maps over the products to display them.
    - Uses the `Image` component to display product images, optimizing them for performance.

---

## Notes

- **Environment Variables:**
  - Ensure you have the following environment variables set in your `.env` file or environment:
    - `SANITY_ACCESS_TOKEN`: Your Sanity access token.
    - `NEXT_PUBLIC_SANITY_PROJECT_ID`: Your Sanity project ID.

- **Sanity Client Configuration:**
  - Adjust the `apiVersion` in `client.ts` if needed, based on the date or version you're targeting.

- **Image URLs:**
  - The `urlFor` function in `image.ts` is crucial for generating URLs that `next/image` can use.

- **Running the Application:**
  - Start your Next.js application with `npm run dev` to see the changes at `http://localhost:3000`.

---

By following these steps, you've:

- Set up a Sanity project with product and category schemas.
- Added sample data to your Sanity dataset.
- Configured the Sanity client and image URL builder.
- Created a Next.js page that fetches and displays data from Sanity, including optimized images.

---

**Happy Coding!**