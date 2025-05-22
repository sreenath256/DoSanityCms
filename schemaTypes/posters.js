export default {
    name: 'poster',
    title: 'Poster',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    description: 'Alternative text for the image',
                },
            ],
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
            description: 'Order of the poster in the list',
        },
    ],
}