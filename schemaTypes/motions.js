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

        },
        {
            name: 'ratio',
            title: 'Ratio',
            type: 'string',
            description: 'Aspect ratio (e.g., 16:9, 4:3)',
            validation: Rule => Rule.required()
        }
    ],
    orderings: [
        {
            title: 'Order',
            name: 'orderAsc',
            by: [
                { field: 'order', direction: 'asc' }
            ]
        }
    ]
}