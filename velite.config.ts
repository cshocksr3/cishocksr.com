import { title } from "process";
import { defineCollection, defineConfig, s } from "velite";

// content/posts/hello-world.mdx

const computedFields = <T extends {slug: string}>(data: T) => ({
    ...data,
    slugAsParams: data.slug.split("/").slice(2).join("/")
})


const posts = defineCollection({
    name: "Blog",
    pattern: "content/post/**/*.mdx",
    schema: s.object({
        slug: s.path(),
        title: s.string().max(99),
        description: s.string().max(999).optional(),
        date: s.isodate(),
        published: s.boolean().default(true),
        body: s.mdx()
    })
    .transform(computedFields),
});

export default defineConfig({
    root: "content",
    output: {
        data: ".velite",
        assets: "public/static",
        base: "/static/",
        name: "[name]-[hash:6].[ext]",
        clean: true
    },
    collections: {posts},
    mdx: {
        rehypePlugins: [],
        remarkPlugins: [],
    }
    });
    