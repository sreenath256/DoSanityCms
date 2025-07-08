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