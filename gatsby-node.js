const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  
  // 記事一覧ページの生成
  /*
  createPage({
    path: "/tech",
    component: require.resolve("./src/templates/blog-list-template.js"),
    context: {
      sourceInstanceName: "tech",
      basePath: "tech",
      title: "My Tech Posts"
    },
  });
  */
  
  createPage({
    path: "/diary",
    component: require.resolve("./src/templates/blog-list-template.js"),
    context: {
      sourceInstanceName: "/diary/",
      basePath: "diary",
      title: "My Diary"
    },
  });

  createPage({
    path: "/article",
    component: require.resolve("./src/templates/blog-list-template.js"),
    context: {
      sourceInstanceName: "/article/",
      basePath: "article",
      title: "My Article"
    },
  });

  // 個別記事ページの生成
  // 各カテゴリ(tech, diary, article)の記事を取得して個別ページを作成
  const categories = ["diary", "article"];
  
  for (const category of categories) {
    const result = await graphql(`
      query {
        allMdx(
          filter: { internal: { contentFilePath: { regex: "/${category}/" } } }
        ) {
          nodes {
            id
            internal {
              contentFilePath
            }
          }
        }
      }
    `);

    if (result.errors) {
      reporter.panicOnBuild('🚨 ERROR: 記事データの取得に失敗しました');
      return;
    }

    // 各記事ページを作成
    const posts = result.data.allMdx.nodes;
    posts.forEach(post => {
        const postId = post.id;
      const filePath = post.internal.contentFilePath;
//      const slug = post.childMdx.slug || postId;
      
      createPage({
 //       path: `/${category}/${slug}`,
        path: `/${category}/${postId}`,
        component: `${path.resolve(`./src/templates/blog-post-template.js`)}?__contentFilePath=${filePath}`,
        context: {
          id: postId,
          basePath: category
        },
      });
    });
  }
};