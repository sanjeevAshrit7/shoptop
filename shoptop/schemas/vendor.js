export default {
    name: 'vendors',
    title: 'vendors',
    type: 'document',
    fields: [
        {
            name: 'vendorName',
            title: 'Vendor Name',
            type: "string"
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
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'array',
            of: [
              {
                title: 'Block',
                type: 'block',
                styles: [{title: 'Normal', value: 'normal'}],
                lists: [],
              },
            ],
        },
    ]
}