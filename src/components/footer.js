import * as React from "react";
import { Link } from "gatsby";
import { FiTwitter, FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <SocialLink href="https://twitter.com/m_masayamatu" aria-label="Twitter">
            <FiTwitter size={30} />
          </SocialLink>
          
          <SocialLink href="https://github.com/masayamatu" aria-label="GitHub">
            <FiGithub size={30} />
          </SocialLink>
        </div>
        
        <div className="text-sm">
          © {new Date().getFullYear()} masayamatu Powered By Gatsby.JS
        </div>
      </div>
    </footer>
  );
};

// ソーシャルリンクコンポーネント
const SocialLink = ({ href, children, ...props }) => (
  <a 
    href={href}
    className="text-white hover:text-orange-400 transition-colors duration-200"
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
);

export default Footer;