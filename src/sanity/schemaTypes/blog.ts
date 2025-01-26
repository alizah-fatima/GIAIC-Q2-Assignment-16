import { defineField, defineType } from 'sanity';

export const blog = defineType( {
    name: 'blog',
    title: 'blog',
    type: 'document',    
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Blog Name',
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Blog Image',
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: 'content',
            type: 'text',
            title: 'Blog Content',
        }),
        defineField({
            name: 'description',
            type: 'array',
            title: 'Blog Description',
            of: [{type: 'block'}],
        }),
        defineField({
            name: 'quote',
            type: 'string',
            title: 'Quote',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
            },
        }),
    ]
})

