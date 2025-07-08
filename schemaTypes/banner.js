export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'video',
            title: 'Video',
            type: 'file',
            options: {
                accept: 'video/*',
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
}