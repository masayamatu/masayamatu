import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <header className="py-4">
      <div className="flex justify-center mb-4">
        <Link to="/about" className="relative group" aria-label="About Page">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-0 group-hover:opacity-70 blur transition-all duration-300"></div>
          <StaticImage
            alt="Site Logo"
            src="../images/header.jpg"
            width={100}
            height={100}
            className="rounded-full relative transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>
      
      <nav className="flex flex-wrap justify-center space-x-1 md:space-x-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/article">Article</NavLink>
      </nav>
    </header>
  );
};

// ナビゲーションリンクコンポーネント
const NavLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="relative px-4 py-2 text-xl font-semibold text-gray-800 hover:text-orange-500 transition-all duration-300 group"
  >
    {/* 通常の文字 */}
    <span className="relative block transition-transform duration-300 group-hover:-translate-y-1 group-hover:drop-shadow-md">
      {children}
    </span>
    
    {/* アンダーライン */}
    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-500 group-hover:w-4/5 group-hover:left-1/10 transition-all duration-300 transform -translate-x-1/2"></span>
    
    {/* 背景ハイライト */}
    <span className="absolute inset-0 rounded-md -z-10 opacity-0 group-hover:opacity-10 bg-orange-100 transition-opacity duration-300"></span>
  </Link>
);

export default Header;