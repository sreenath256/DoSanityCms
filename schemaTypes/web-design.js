export default {
    name: 'webDesign',
    title: 'Web Design',
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
            validation: Rule => Rule.required()
        },
        {
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
            description: 'Alternative text for the image',
            validation: Rule => Rule.required()
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url',
            validation: Rule => Rule.uri({
                allowRelative: true,
                scheme: ['http', 'https', 'mailto', 'tel']
            })
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