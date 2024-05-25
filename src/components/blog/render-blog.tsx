import type { Blog, Author } from "#site/content";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";

export default function RenderBlog({
  blog,
  author,
}: {
  blog: Blog;
  author: Author;
}) {
  return (
    <main className="relative w-full max-w-3xl mx-auto min-h-screen">
      <Link href="/blog">
        <Button
          size="sm"
          variant="ghost"
          className="group mb-3 p-0 flex items-center gap-2 hover:bg-transparent hover:text-white"
        >
          <ArrowLeft
            size={16}
            className="translate-x-1 group-hover:-translate-x-0 transition-all duration-150 delay-75 ease-in-out"
          />
          <p>Go back</p>
        </Button>
      </Link>
      <div className="w-full p-2 bg-indigo-400/50 rounded-lg">
        <Image
          width={600}
          height={400}
          alt={blog.title}
          src={blog.image}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="bg-indigo-400/50 px-2 py-1 rounded-full inline-flex text-sm my-6">
        <p>{blog.category}</p>
      </div>
      <h1 className="text-3xl lg:text-5xl font-bold my-2">{blog.title}</h1>
      <p className="text-muted-foreground">{blog.description}</p>
      <div className="w-full flex justify-between items-end my-6">
        <div className="flex gap-3 items-center">
          <Image
            src={author.image}
            alt={author.name}
            className="w-9 h-9 object-cover rounded-full hover:scale-105 duration-200 transition-transform transform-gpu ease-in-out"
          />
          <div>
            <h2>{author.name}</h2>
            <p className="text-sm text-muted-foreground">
              {author.designation}
            </p>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          {new Date(blog.date).toDateString()}
        </div>
      </div>
      <Separator className="mb-6 bg-primary/40" />
      <MDXContentRenderer code={blog.body} />
    </main>
  );
}
