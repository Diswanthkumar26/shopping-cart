import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-md shadow p-4 hover:shadow-lg transition duration-200">
      <Link to={`/blog/${blog.id}`}>
        <img
          src={blog.image}
          alt={blog.title}
          className="rounded flex items-center justify-center w-full h-48 object-cover mb-4"
        />
        <h2 className="font-bold transition cursor-pointer hover:text-blue-600">
          {blog.title}
        </h2>
      </Link>
      <div className="text-sm text-gray-600 mt-2 flex justify-between">
        <span>👤 {blog.author}</span>
        <span>{blog.date}</span>
      </div>
    </div>
  );
};

export default BlogCard;