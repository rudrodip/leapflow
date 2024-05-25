import { Blog } from "#site/content"
import BlogCard from "./blog-card"

export default function RenderBlogList({ blogs }: { blogs: Blog[] }) {
  return (
    <section className='flex flex-wrap gap-3 mt-8 min-h-[80vh]'>
      {blogs.map((blog) => (
        <BlogCard key={blog.slug} blog={blog} />
      ))}
      {blogs.length === 0 && (
          <h3 className="p-1 text-2xl text-center">No blogs yet</h3>
      )}
    </section>
  )
}