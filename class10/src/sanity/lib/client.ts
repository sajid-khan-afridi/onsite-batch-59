import { createClient } from "next-sanity";

// import { apiVersion, dataset, projectId } from '../env'

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// })
export const client = createClient({
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "v2024-09-27",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
