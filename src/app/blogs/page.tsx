"use client";

import BlogCard from "@/components/ui/BlogCard";
import Spinner from "@/components/ui/Spinner";
import { useGetBlogsQuery } from "@/redux/apis/blogs.slice";
import { Blog } from "@/types";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "ThinkFlow | All Blogs",
//   description: "Navigate all the blogs from ThinkFlow",
//   keywords: "ThinkFlow, Jamil",
//   publisher: "Jamil",
//   alternates: {
//     canonical: "http://localhost:3000/blogs",
//   },
// };

const BlogsPage = () => {
  // const res = await fetch("http://localhost:5001/blogs", {
  //   cache: "no-cache",
  // });
  // const blogs =  res.json();
  // //   console.log(blogs);

  const { data: blogs, isLoading } = useGetBlogsQuery({});
  // console.log(data);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="mx-10">
      <div className="my-10">
        <h1 className="text-3xl text-center my-5 font-bold">
          Latest Blogs From <span className="text-teal-600">ThinkFlowBlog</span>
        </h1>
        <p className="text-center text-gray-400 w-2/5 mx-auto">
          <i>
            Dive into the fascinating world of quantum computing, where
            unlocking unprecedented computational power.
          </i>
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 mx-auto ">
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
