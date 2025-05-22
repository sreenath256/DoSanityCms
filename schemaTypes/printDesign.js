export default {
    name: 'printDesign',
    title: 'Print Design',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
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
                            options: {
                                isHighlighted: true
                            }
                        }
                    ]
                }
            ],
            validation: Rule => Rule.required().min(1)
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number'
        }
    ]
}