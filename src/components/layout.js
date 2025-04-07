import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ pageTitle, children, isPostList = false }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const { title, description } = data.site.siteMetadata;

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{pageTitle ? `${pageTitle} | ${title}` : title}</title>
        <meta name="description" content={description} />
      </Helmet>
      
      <div className="container mx-auto px-4 md:px-6 flex-grow">
        <header className="text-4xl font-bold text-gray-600 my-8 text-center">
          {title}
        </header>
        
        <Header />
        
        <hr className="my-6 border-gray-300" />
        
        <main>
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            {pageTitle}
          </h1>
          
          <div className={`${isPostList ? '' : 'prose prose-lg max-w-none'} mx-auto text-left`}>
            {children}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;