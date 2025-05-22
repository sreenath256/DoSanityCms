export default {
    name: 'branding',
    title: 'Branding',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail Image',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'innerImages',
            title: 'Inner Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true
                    }
                }
            ]
        },
        {
            name: 'altText',
            title: 'Alt Text',
            type: 'string'
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number'
        }
    ]
}