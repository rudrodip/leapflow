import { Blog } from "#site/content";
import { authors } from "#site/content";
import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ blog }: { blog: Blog }) {
  const blogPath = `/blog/${blog.slugAsParams}`;
  const author = authors.find((a) => a.slugAsParams === blog.author);

  if (!author) return null;

  return (
    <Link href={blogPath}>
      <div className="w-full max-w-[25rem] bg-indigo-500/40 rounded-2xl p-3">
        <div className="w-full rounded-2xl mb-2 overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            className="w-full hover:scale-105 transition-all transform-gpu duration-300 ease-in-out"
          />
        </div>
        <p className="inline-flex mt-1 px-2 py-1 bg-indigo-400 text-sm rounded-full hover:translate-x-1 duration-100 transition-all ease-in-out">
          {blog.category}
        </p>
        <h1 className="font-semibold mt-2 text-xl flex">{blog.title}</h1>
        <div className="w-full flex justify-between items-end mt-4">
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
      </div>
    </Link>
  );
}
