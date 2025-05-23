export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: Rule => Rule.required()
        },
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
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'metatitle',
            title: 'Meta Title',
            type: 'string'
        },
        {
            name: 'metadescription',
            title: 'Meta Description',
            type: 'text'
        },
        {
            name: 'metakeywords',
            title: 'Meta Keywords',
            type: 'text'
        },
        {
            name: 'createdAt',
            title: 'Created At',
            type: 'datetime',
            readOnly: true
        },
        {
            name: 'updatedAt',
            title: 'Updated At',
            type: 'datetime',
            readOnly: true
        }
    ],
    initialValue: () => ({
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }),
    // This is a workaround: you need a custom document action/plugin to update updatedAt on every save
}