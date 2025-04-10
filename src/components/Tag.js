import * as React from "react";
import { AiFillTags } from "react-icons/ai";

const Tag = ({ tags }) => {
  if (!tags || tags.length === 0) return null;
  
  return (
    <div className="flex flex-wrap items-center">
      <AiFillTags className="text-gray-600 mr-2" />
      {tags.map((tag, index) => (
        <span 
          key={index}
          className="inline-block bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tag;
