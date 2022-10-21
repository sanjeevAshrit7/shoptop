export default {
    name: 'categories',
    title: 'Categories',
    type: 'document',
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        {
            title: "Description",
            name: "description",
            type: "text",
          },
          {
            title: "Image",
            name: "image",
            type: "image",
            options: {
              hotspot: true,
            },
          },
          {
            title: "Hex Code",
            name: "hexCode",
            type: "string",
          },
    ]
};
