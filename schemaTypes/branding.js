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
            name: 'orderRank',
            title: 'Order Rank',
            type: 'string',
            hidden: true, // This hides it from the regular document view
        },
    ],
    orderings: [
        {
            title: 'Order by Rank',
            name: 'orderRankAsc',
            by: [{ field: 'orderRank', direction: 'asc' }],
        },
    ],

}