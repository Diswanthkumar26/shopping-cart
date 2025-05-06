import { useParams } from 'react-router-dom';
import { blogs } from '../../Data/BlogData';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <div className="p-6">Blog not found</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <div className="prose prose-lg max-w-none">
        {blog.content}
      </div>
    </div>
  );
};

export default BlogDetails;
