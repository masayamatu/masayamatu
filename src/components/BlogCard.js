import * as React from "react";
import { Link } from "gatsby";
import { FaRegCalendarAlt, FaArrowRight } from "react-icons/fa";
import Tag from "./Tag";

const BlogCard = ({ post, basePath }) => {
  const { id, frontmatter, slug } = post;
  const { title, date, tags } = frontmatter;
  
  // slugがある場合はそれを使用、なければidを使用
  const postPath = `/${basePath}/${id}`;

  return (
    <Link to={postPath} className="block text-current no-underline">
      <article className="group mb-8 bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl relative transform hover:-translate-y-2 cursor-pointer">
        {/* 左上から入ってくる円のエフェクト */}
        <div className="absolute -left-20 -top-20 w-40 h-40 bg-orange-700 opacity-0 rounded-full transition-all duration-700 ease-out group-hover:opacity-10 group-hover:translate-x-12 group-hover:translate-y-12"></div>
        
        {/* グラデーション背景エフェクト */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
        
        <div className="p-6 relative z-10 border-l-4 border-transparent transition-all duration-300 group-hover:border-orange-500">
          <h2 className="text-2xl font-bold mb-3 transition-all duration-300 text-gray-800 group-hover:text-orange-500">
            {title}
          </h2>
          
          <div className="flex items-center text-gray-600 text-sm mb-4 transition-all duration-300 group-hover:text-gray-700">
            <FaRegCalendarAlt className="mr-2" />
            <span>Posted: {date}</span>
          </div>
          
          {tags && tags.length > 0 && (
            <div className="mt-4 transition-all duration-300 group-hover:translate-y-1">
              <Tag tags={tags} />
            </div>
          )}
        </div>
        
        <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-white border-t border-gray-100 relative z-10 transition-all duration-500 group-hover:from-orange-50 group-hover:to-white">
          <div 
            className="text-gray-700 font-medium transition-all duration-300 flex items-center group-hover:text-orange-500 group-hover:translate-x-1"
          >
            <span className="mr-2 relative overflow-hidden">
              <span className="transition-transform duration-300 inline-block group-hover:-translate-y-full">続きを読む</span>
              <span className="absolute left-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">Read more</span>
            </span>
            <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;