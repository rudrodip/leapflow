import { redirect } from "next/navigation";
import { blogs, authors } from "#site/content";
import { blogCategories } from "@/config/blogCategories.config";
import RenderBlog from "@/components/blog/render-blog";
import RenderBlogList from "@/components/blog/render-blogs";

export default function BlogPage({ params }: { params: { slug: string[] } }) {
  const slug = params.slug[0];
  console.log(slug)
  const category = blogCategories.find((c) => c.slug.replace("/", "") === slug);

  if (category) {
    const categoryBlogs = blogs.filter((b) => b.category === category.name);
    return <RenderBlogList blogs={categoryBlogs} />;
  }

  const blog = blogs.find((b) => b.slugAsParams === slug);
  const author = authors.find((a) => a.slugAsParams === blog?.author);

  if (!blog || !author) redirect("/blog");

  return <RenderBlog blog={blog} author={author} />;
}
