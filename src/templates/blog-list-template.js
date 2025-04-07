import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BlogCard from "../components/BlogCard";

const BlogListPage = ({ data, pageContext }) => {
  const { basePath, title } = pageContext;
  const posts = data.allMdx.nodes.map((node) => ({
    id: node.id,
    frontmatter: node.frontmatter,
    //    slug: node.childMdx.slug
  }));

  // 検索状態を管理するための状態変数
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredPosts, setFilteredPosts] = React.useState(posts);

  // ページネーション用の状態変数
  const [currentPage, setCurrentPage] = React.useState(1);
  const postsPerPage = 5; // 1ページあたりの記事数

  // 検索語が変更されたときにフィルタリングを行う
  React.useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPosts(posts);
    } else {
      const lowercaseSearchTerm = searchTerm.toLowerCase();
      const results = posts.filter((post) => {
        const title = post.frontmatter.title?.toLowerCase() || "";
        const tags = post.frontmatter.tags || [];

        // タイトルまたはタグに検索語が含まれているかチェック
        return (
          title.includes(lowercaseSearchTerm) ||
          tags.some((tag) => tag.toLowerCase().includes(lowercaseSearchTerm))
        );
      });
      setFilteredPosts(results);
    }
    // 検索条件が変わったら、ページを1に戻す
    setCurrentPage(1);
  }, [searchTerm]);

  // 現在のページに表示する記事を計算
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // 総ページ数を計算
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // ページ変更ハンドラ
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // ページトップにスクロール
    window.scrollTo(0, 0);
  };

  // 検索入力の変更ハンドラ
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Layout pageTitle={title} isPostList={true}>
      {/* 検索バー */}
      <div className="mb-8">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="タイトルまたはタグで検索..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {/* 現在のページと総ページ数を表示 */}
      {filteredPosts.length > 0 && (
        <div className="text-sm text-gray-500 mb-4">
          {filteredPosts.length}件中 {indexOfFirstPost + 1}-
          {Math.min(indexOfLastPost, filteredPosts.length)}件を表示 (ページ{" "}
          {currentPage}/{totalPages})
        </div>
      )}

      {/* 検索結果がない場合のメッセージ */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          検索条件に一致する記事が見つかりませんでした。
        </div>
      )}

      {/* 記事リスト */}
      <div className="grid grid-cols-1 gap-8">
        {currentPosts.map((post) => (
          <BlogCard key={post.id} post={post} basePath={basePath} />
        ))}
      </div>

      {/* ページネーション */}
      {filteredPosts.length > 0 && totalPages > 1 && (
        <div className="flex justify-center mt-10 mb-6">
          <nav className="flex items-center" aria-label="ページネーション">
            {/* 前のページボタン */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`mx-1 px-3 py-2 rounded-md ${
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-600 hover:bg-blue-50"
              }`}
              aria-label="前のページ"
            >
              &laquo; 前へ
            </button>

            {/* ページ番号 */}
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              // 現在のページの前後2ページまでと、最初と最後のページを表示
              if (
                pageNumber === 1 ||
                pageNumber === totalPages ||
                (pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2)
              ) {
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`mx-1 px-4 py-2 rounded-md ${
                      currentPage === pageNumber
                        ? "bg-blue-600 text-white"
                        : "text-blue-600 hover:bg-blue-50"
                    }`}
                    aria-label={`${pageNumber}ページ目`}
                    aria-current={currentPage === pageNumber ? "page" : null}
                  >
                    {pageNumber}
                  </button>
                );
              }

              // 省略記号（現在のページの3つ前と3つ後に表示）
              if (
                pageNumber === currentPage - 3 ||
                pageNumber === currentPage + 3
              ) {
                return (
                  <span key={pageNumber} className="mx-1 px-2 py-1">
                    ...
                  </span>
                );
              }

              return null;
            })}

            {/* 次のページボタン */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`mx-1 px-3 py-2 rounded-md ${
                currentPage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-600 hover:bg-blue-50"
              }`}
              aria-label="次のページ"
            >
              次へ &raquo;
            </button>
          </nav>
        </div>
      )}
    </Layout>
  );
};

export const query = graphql`
  query BlogListQuery($sourceInstanceName: String!) {
    allMdx(
      filter: { internal: { contentFilePath: { regex: $sourceInstanceName } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          tags
        }
        id
      }
    }
  }
`;

export default BlogListPage;
