# Understanding Headless CMS and Sanity

## What is a Headless CMS?

A **Headless CMS** (Content Management System) is a back-end content management system that stores and organizes content without being tied to a specific front-end or presentation layer. Unlike traditional CMS platforms like WordPress or Joomla—which both manage content and control its presentation—a headless CMS focuses solely on content management. The "head" (front-end) is decoupled from the CMS, allowing developers to deliver content across multiple platforms, devices, and channels.

**Benefits:**

- **Flexibility:** Content can be consumed by any front-end application via APIs.
- **Scalability:** Easily adapt to new technologies and platforms without overhauling the CMS.
- **Future-Proofing:** Decoupled architecture allows for independent updates to the front-end and back-end.

---

## Contentful vs. Sanity

When choosing a headless CMS, two popular options are **Contentful** and **Sanity**.

### Sanity

- **Customization:** Highly customizable, allowing for complex and tailored content models.
- **Features:** Offers more features than Contentful, including real-time collaboration and advanced data validation.
- **Complexity:** More difficult to learn due to its flexibility and customization options.
- **Schema Changes:** Allows easy changes to fields in models or schemas directly through code.

### Contentful

- **Ease of Use:** More straightforward and easier to set up for simple projects.
- **Customization:** Less customizable compared to Sanity.
- **Features:** Provides essential features suitable for basic content management needs.

**Conclusion:**

- Choose **Sanity** if you need high customization and are comfortable with a steeper learning curve.
- Choose **Contentful** for simplicity and quicker setup times for less complex projects.

---

## Headless CMS vs. Database

When deciding between using a headless CMS and a traditional database, consider the nature of your data:

### Use a Database When:

- **Frequent Data Changes:** Ideal for data that changes frequently, such as user sign-ups or order placements.
- **Security:** Provides more robust security measures for sensitive data.
- **Transactions:** Necessary for complex transactions and relational data operations.

### Use a Headless CMS When:

- **Content Management:** Best for managing website content like articles, images, and static pages.
- **Content Delivery:** Allows for content to be delivered across multiple platforms and devices.

**Key Point:**

- A headless CMS is primarily used to manage and deliver website content, not for transactional data that requires frequent updates and high security.

---

## Installation of Sanity

When installing Sanity, you'll be prompted with several options:

### Embedded Sanity Studio

- **Option:** **Yes**
- **Explanation:** Embeds the Sanity Studio within your website, accessible via a specific route.
- **Example URL:** `www.yourwebsite.com/sanity`

### Setting the Route for the Studio

- **Route:** `/studio`
- **Explanation:** Determines the URL path where the Sanity Studio (admin dashboard) will be accessible.
- **Example URL:** `www.yourwebsite.com/studio`

### Schema Selection

- **Option:** **Select the clean schema**
- **Explanation:** Starts your project with a clean schema, allowing you to build your content models from scratch.

---

## After Installation

- A new route (e.g., `/studio` or `/sanity`) is generated in your application.
- The Sanity Studio (admin dashboard) becomes accessible via this route.
- Use this interface to manage your content, models, and schemas.

---

## Core Origin Configuration

Before accessing Sanity services in your project, you need to configure the **CORS (Cross-Origin Resource Sharing) origins**:

- **Add `localhost:3000` and `localhost:3333` to Sanity's CORS origins.**
- **Purpose:**
  - Sanity's API can only be accessed by allowed origins to enhance security.
  - Prevents CORS errors when fetching data from the client-side (browser).
- **Note:**
  - CORS errors occur on the client-side, not the server-side.
  - Configuring CORS origins is an additional security layer alongside token and environment variable (`.env`) security.

---

## Query Language (GROQ)

Sanity uses **GROQ (Graph-Relational Object Queries)** as its query language:

- **Data Fetching:**
  - Fetch and update data on your website using GROQ queries.
  - Retrieve specific data as needed, improving efficiency.
- **Alternative Methods:**
  - While you can use REST API methods to fetch data, they may retrieve the entire dataset, which is less efficient.

**Example of a GROQ Query:**

```groq
*[_type == "product"] {
  title,
  price,
  category->{
    name
  },
  image
}
```

---

## Accessing Sanity Studio (`/studio`)

- **Purpose:** The Sanity Studio is where you add, delete, and update your data.
- **Access:** Navigate to the route you specified during installation (e.g., `www.yourwebsite.com/studio`).
- **Features:**
  - User-friendly interface for content management.
  - Real-time collaboration capabilities.

---

## Management Tools

- **Project Management:**
  - Control who can access your project and the Sanity Studio.
  - Adjust settings, manage user roles, and permissions.
- **Project Deletion:**
  - Delete the project from the settings if necessary.
- **Access Control:**
  - Define who can access the `/studio` route and manage content.

---

## Models or Schemas

### Understanding Models/Schemas

- **Definition:** Blueprints that define the structure of your content types.
- **Creation:** Set up using code, allowing for version control and collaboration.
- **Example:** A `product` schema with fields like `name`, `picture`, `description`, etc.

### Features

- **Real-Time Collaboration:** Multiple developers can work on schemas simultaneously.
- **Customization:**
  - Define field types (e.g., string, number, image).
  - Add validation rules and options for each field.
- **Document Types:** Models are document types from which you can create multiple entries (e.g., multiple products).

---

## Important Notes

- **Data Storage:**
  - Sanity's data is stored in the cloud, referred to as the **content lake**.
  - The data is not stored locally on `localhost`.
- **Content Layer:**
  - Sanity acts as a content layer, providing a centralized place to manage and deliver content to any front-end.

---

## Sanity Features

### Real-Time Collaboration

- **Collaboration:** Team members can see changes in real-time.
- **Version Control:** Track changes and revert to previous versions if necessary.

### High Customization

- **Data Fields:** Highly customizable fields with options and validation.
- **Schemas:** Modify schemas easily through code to adapt to changing requirements.

---

## Summary

Sanity is a powerful headless CMS that offers:

- **Flexibility:** Deliver content across multiple platforms and devices.
- **Customization:** Tailor your content models to fit complex needs.
- **Real-Time Collaboration:** Work simultaneously with team members.
- **High Security:** Control access through CORS origins and environment variables.

**Remember:**

- Sanity is not just running on your local machine; it's a cloud-based service.
- Properly configure your CORS origins to avoid client-side errors.
- Utilize GROQ to efficiently fetch and manipulate your data.

---

**Final Thoughts**

By understanding the concepts of headless CMS, the differences between Contentful and Sanity, and how to effectively use Sanity's features, you can build flexible and scalable content-driven applications.

---

---

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

  - Place these files in the `sanity/schemaTypes` directory of your Sanity project.
  - Define the fields for each schema as per your data requirements.
  - In your `index.ts` file within the `schemaTypes` directory, import both `product.ts` and `category.ts`.

- **Schema Definitions:**

  **`product.ts`:**

  ```typescript
  import { defineField } from "sanity";
  ```

export const products = {
name: "product",
title: "Product",
type: "document",
fields: [
{
name: "title",
title: "Title",
type: "string",
},
{
name: "type",
title: "Type",
type: "string",
},
defineField({
name: "price",
type: "number",
title: "Price",
}),
defineField({
name: "image",
title: "Image",
type: "image",
}),
defineField({
name: "category",
type: "reference",
title: "Enter the category",
to: {
type: "category",
},
}),
],
};

````

**`category.ts`:**

```typescript
import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  type: "document",
  title: "category",
  fields: [
    defineField({
      name: "name",
      title: "Enter Category",
      type: "string",
    }),
  ],
});

````

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
  import { createClient } from "next-sanity";

  export const client = createClient({
    token: process.env.SANITY_ACCESS_TOKEN,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "v2024-09-25",
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
  import { createImageUrlBuilder } from "next-sanity";
  import { client } from "./client";

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
  import { client } from "@/sanity/lib/client";
  import { urlFor } from "@/sanity/lib/image";
  import Image from "next/image";
  import React from "react";
  import { Image as IImage } from "sanity";

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
    console.log("Data=", data);
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
