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
      {
        name: "price",
        type: "number",
        title: "Price",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
      },
      {
        name: "category",
        type: "reference",
        title: "Enter the category",
        to: {
          type: "category",
        },
      }
  ],
};
