import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <header className="py-4">
      <div className="flex justify-center mb-4">
        <Link to="/about" className="relative" aria-label="About Page">
          <StaticImage
            alt="Site Logo"
            src="../images/header.jpg"
            width={100}
            height={100}
            className="rounded-full"
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
    className="px-4 py-2 text-xl font-semibold text-gray-800 hover:text-orange-500 transition-colors duration-200"
  >
    {children}
  </Link>
);

export default Header;