export default {
    name: 'homePage',
    type: 'document',
    title: 'Home Page',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'video',
            type: 'file',
            title: 'Video',
            options: {
                accept: 'video/*'
            }
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        }
    ]
}