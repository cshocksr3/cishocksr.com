import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

    const rootDirectory = path.join(process.cwd(), 'content', 'posts')

    export type Post = {
        metadata: PostMettadata
        content: string
    }

    export type PostMettadata = {
        title?: string
        summary?: string
        image?: string
        author?: string
        publishedAt?: string
        slug: string
    }

    export async function getPostsBySlug(slug: string): Promise<Post|null> {
        try {
             const filePath = path.join(rootDirectory, `${slug}.mdx`)
             const fileContent =  fs.readFileSync(filePath, {encoding: 'utf8'})
             const {data, content} = matter(fileContent);
        
             return {metadata: {...data, slug}, content}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            return null
        }
       
    }
