import { blogs } from '../Data/BlogData';
import BlogCard from '../blogs/BlogCards';

const BlogList = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-50 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 py-2">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
      </div>
    </div>
  );
};

export default BlogList;