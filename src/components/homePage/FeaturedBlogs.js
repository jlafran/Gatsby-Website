import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles';
import BlogGrid from '../blog/BlogGrid';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';

function FeaturedBlogs() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {featured: {eq: "Yes"}}}) {
    edges {
      node {
        frontmatter {
          date
          description
          title
          slug
          categoriesSlug
          categoriesTitle
          featuredImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
    }
  `);
  const featuredBlogs = data.allMarkdownRemark.edges;
  return (
    <FeaturedBlogsStyles>
      <SectionTitle>Featured Blogs</SectionTitle>
      <ParagraphText className="featuredBlogs__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nemo
        ad provident consectetur quis eaque doloribus et, ducimus earum iste est
        corporis
      </ParagraphText>
      <BlogGrid blogs={featuredBlogs} />
    </FeaturedBlogsStyles>
  );
}

export default FeaturedBlogs;
