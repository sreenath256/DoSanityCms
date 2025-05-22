export default {
    name: 'motion',
    title: 'Motion',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    description: 'Alternative text for screen readers',
                    validation: Rule => Rule.required()
                }
            ],
            validation: Rule => Rule.required()
        },
        {
            name: 'video',
            title: 'Video',
            type: 'file',
            options: {
                accept: 'video/*'
            },
            description: 'Upload a video file for this poster'
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
            description: 'Drag to reorder posters',
            validation: Rule => Rule.required().integer().min(0)
        }
    ],
    orderings: [
        {
            title: 'Order',
            name: 'orderAsc',
            by: [
                {field: 'order', direction: 'asc'}
            ]
        }
    ]
}