import { type SchemaTypeDefinition } from "sanity";
import { category } from "./category";
import { products } from "./product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, products],
};
