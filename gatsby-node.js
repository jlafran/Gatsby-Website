exports.createPages = async ({ graphql, actions }) => {
  const postsPerPage = parseInt(process.env.GATSBY_POST_PER_PAGE) || 6;
  // templates path
  const singleBlogTemplate = require.resolve('./src/templates/single-blog.js');
  const blogListTemplate = require.resolve('./src/templates/blog-list.js');
  const categoryListTemplate = require.resolve(
    './src/templates/category-list.js'
  );

  const singleCategoryTemplate = require.resolve(
    './src/templates/single-category.js'
  );

  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
    
      
  `);

const resultCategory = await graphql(`
{
  allCategoriesJson {
    nodes {
      slug
    }
  }
}

  
`);

  if (result.errors) throw result.errors;
  const blogs = result.data.allMarkdownRemark.edges;
  const categories = resultCategory.data.allCategoriesJson.nodes;


  // single blogs pages
  blogs.forEach((blog) => {
    createPage({
      path: `/blogs/${blog.node.frontmatter.slug}`,
      component: singleBlogTemplate,
      context: {slug: blog.node.frontmatter.slug}
    });
  });

    // single category pages
    categories.forEach((category) => {
      createPage({
        path: `/categories/${category.slug}`,
        component: singleCategoryTemplate,
        context: { slug: category.slug },
      });
    });

  // blogs paginated pages
  const totalBlogListPages = Math.ceil(blogs.length / postsPerPage);
  Array.from({ length: totalBlogListPages }).forEach((_, pageIndex) => {
    createPage({
      path: pageIndex === 0 ? `/blogs` : `/blogs/${pageIndex + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        offset: pageIndex * postsPerPage,
        numberOfPages: totalBlogListPages,
        currentPage: pageIndex + 1,
      },
    });
  });

    // category paginated pages
    const totalCategoryListPages = Math.ceil(categories.length / postsPerPage);
    Array.from({ length: totalCategoryListPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/categories` : `/categories/${index + 1}`,
        component: categoryListTemplate,
        context: {
          limit: postsPerPage,
          offset: index * postsPerPage,
          numberOfPages: totalCategoryListPages,
          currentPage: index + 1,
        },
      });
    });

};
