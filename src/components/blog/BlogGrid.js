import React from 'react';
import { BlogGridStyles } from '../../styles/blog/BlogGridStyles';
import BlogItem from './BlogItem';

function BlogGrid({ blogs }) {
  return (
    <BlogGridStyles>
      {blogs &&
        blogs.map((blog) => (
          <BlogItem
            key={blog.id}
            path={blog.node.frontmatter.slug}
            title={blog.node.frontmatter.title}
            categories={blog.node.frontmatter.categoriesTitle}
            categoriesPath={blog.node.frontmatter.categoriesSlug}
            image={{
              imageData: blog.node.frontmatter.featuredImage.childImageSharp.gatsbyImageData
            }}
            publishedAt={blog.node.frontmatter.date}
          />
        ))}
    </BlogGridStyles>
  );
}

export default BlogGrid;
