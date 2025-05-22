export default {
    name: 'packageDesign',
    title: 'Package Design',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'altText',
            title: 'Alt Text',
            type: 'string',
            description: 'Alternative text for the image'
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
            description: 'Display order'
        }
    ]
}