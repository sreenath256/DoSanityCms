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
        {
            name: 'ratio',
            title: 'Ratio',
            type: 'string',
            description: 'Aspect ratio of the poster (e.g., 16/9, 4/3)',
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