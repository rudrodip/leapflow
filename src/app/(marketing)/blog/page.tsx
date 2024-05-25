import { blogs } from '#site/content'
import RenderBlogList from '@/components/blog/render-blogs'

export default function BlogsPage() {
  return <RenderBlogList blogs={blogs} />
}