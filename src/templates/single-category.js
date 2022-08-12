import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import BlogGrid from '../components/blog/BlogGrid';

import PageHeader from '../components/PageHeader';
import PageSpace from '../components/PageSpace';
import SEO from '../components/seo';
import { SingleCategoryStyles } from '../styles/category/SingleCategoryStyles';

export const query = graphql`
  query SingleBlogCategoryQuery($slug: String!) {
    allMarkdownRemark(filter: {frontmatter: {categoriesSlug: {eq: $slug}}}) {
    edges {
      node {
        id
        frontmatter {
          title
          slug
          date
          description
          categoriesTitle
          featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        }
      }
    }
  }
  }
`;

function SingleCategory({ data }) {
  
  const categories = data.allMarkdownRemark.edges;
  const blogs = data.allMarkdownRemark.edges;

  return (
    <PageSpace top={80} bottom={100}>
      <SingleCategoryStyles>
        <div className="container">
          <SEO title={categories[0].node.frontmatter.categoriesTitle} />
          <PageHeader title={categories[0].node.frontmatter.categoriesTitle} className="pageHeader"/>
          <BlogGrid blogs={blogs} />
        </div>
      </SingleCategoryStyles>
    </PageSpace>
  );
}

export default SingleCategory;
