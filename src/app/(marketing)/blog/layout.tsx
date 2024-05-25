import BlogCategoryBar from "@/components/blog/blog-category-bar";

type BlogLayoutProps = {
  children: React.ReactNode;
};

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <section className="w-full bg-themeBackground">
      <section className="w-full max-w-5xl mx-auto pt-12 pb-12 md:pb-24">
        <BlogCategoryBar />
        {children}
      </section>
    </section>
  );
}
