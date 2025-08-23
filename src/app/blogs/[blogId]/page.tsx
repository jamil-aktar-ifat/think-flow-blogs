import BlogDetailsCard from "@/components/ui/BlogDetailsCard";

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  const res = await fetch(`http://localhost:5001/blogs/${blogId}`);
  const blog = await res.json();
  console.log(blog);

  return (
    <div className="my-10">
      <BlogDetailsCard blog={blog}></BlogDetailsCard>
    </div>
  );
};

export default BlogDetailsPage;
