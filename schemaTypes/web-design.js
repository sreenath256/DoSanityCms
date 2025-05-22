export default {
    name: 'webDesign',
    title: 'Web Design',
    type: 'document',
    fields: [
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alt Text',
                            type: 'string',
                            description: 'Alternative text for the image'
                        }
                    ]
                }
            ]
        },
        {
            name: 'websiteUrl',
            title: 'Website URL',
            type: 'url'
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number'
        }
    ]
}