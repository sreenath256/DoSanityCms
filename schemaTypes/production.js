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
        accept: 'video/*',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'altText',
      type: 'string',
      title: 'Alt Text',
      description: 'Alternative text for the thumbnail image',
    },
    {
      name: 'ratio',
      title: 'Ratio',
      type: 'string',
      description: 'Aspect ratio (e.g., 16/9, 4/3)',
    },
    // ✅ Orderable field (used by the plugin)
    {
      name: 'orderRank',
      title: 'Order Rank',
      type: 'string',
      hidden: true,
    },
  ],

  // 👇 Needed to allow sorting by orderRank in views
  orderings: [
    {
      title: 'Order by Rank',
      name: 'orderRankAsc',
      by: [{ field: 'orderRank', direction: 'asc' }],
    },
  ],
}
