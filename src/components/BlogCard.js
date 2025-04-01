
import * as React from "react";
import { Link } from "gatsby";
import { FaRegCalendarAlt } from "react-icons/fa";
import Tag from "./Tag";

const BlogCard = ({ post, basePath }) => {
  const { id, frontmatter, slug } = post;
  const { title, date, tags } = frontmatter;
  
  // slugがある場合はそれを使用、なければidを使用
//  const postPath = `/${basePath}/${slug || id}`;
  const postPath = `/${basePath}/${id}`;

  return (
    <article className="mb-8 bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">
          <Link 
            to={postPath}
            className="text-gray-800 hover:text-orange-500 transition-colors duration-200"
          >
            {title}
          </Link>
        </h2>
        
        <div className="flex items-center text-gray-600 text-sm mb-3">
          <FaRegCalendarAlt className="mr-1" />
          <span>Posted: {date}</span>
        </div>
        
        {tags && tags.length > 0 && (
          <div className="mt-3">
            <Tag tags={tags} />
          </div>
        )}
      </div>
      
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
        <Link 
          to={postPath}
          className="text-orange-500 hover:text-orange-700 font-medium transition-colors duration-200 flex items-center"
        >
          続きを読む
          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;