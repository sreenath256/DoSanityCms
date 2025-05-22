export default {
    name: 'production',
    type: 'document',
    title: 'Production',
    fields: [
        {
            name: 'video',
            type: 'file',
            title: 'Video',
            options: {
                accept: 'video/*'
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'thumbnail',
            type: 'image',
            title: 'Thumbnail',
            validation: Rule => Rule.required()
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: Rule => Rule.required()
        },
        {
            name: 'altText',
            type: 'string',
            title: 'Alt Text',
            description: 'Alternative text for the thumbnail image (optional)'
        },
        {
            name: 'order',
            type: 'number',
            title: 'Order',
            validation: Rule => Rule.required().integer().min(0)
        }
    ]
}