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
  allCategoriesJson(filter: {slug: {eq: $slug}}) {
    edges {
      node {
        description
        slug
        title
      }
    }
  }
  }
`;

function SingleCategory({ data }) {
  
  const category= data.allCategoriesJson.edges;
  const blogs = data.allMarkdownRemark.edges;
  console.log(data)

  return (
    <PageSpace top={80} bottom={100}>
      <SingleCategoryStyles>
        <div className="container">
          <SEO title={category[0].node.title} description={category[0].node.description}/>
          <PageHeader title={category[0].node.title} className="pageHeader"/>
          <p>{category[0].node.description}</p>
          <BlogGrid blogs={blogs} />
        </div>
      </SingleCategoryStyles>
    </PageSpace>
  );
}

export default SingleCategory;
