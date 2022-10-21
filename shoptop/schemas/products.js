export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            title: 'Product Name',
            name: 'productName',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'A little description',
            name: 'prodDesc',
            type: 'text',
            options: {
                maxLength: 200,
            },
            validation: Rule => Rule.required()
        },
        {
            title: "Product Image",
            name: "prodImage",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "category",
            title: "Category",
            type: "reference",
            to: {
                type: "categories"
            }
        },
        {
            name: "vendor",
            title: "Vendor",
            type: "reference",
            to: {
                type: "vendors"
            }
        },
    ]
};
