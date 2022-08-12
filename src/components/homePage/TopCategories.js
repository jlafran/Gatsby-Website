import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { TopCategoriesStyles } from '../../styles/homePage/TopCategoriesStyles';
import CategoryGrid from '../category/CategoryGrid';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';

function TopCategories() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "category"}}}) {
    nodes {
      frontmatter {
        title
        slug
        description
      }
    }
  }
    }
  `);
  const categories = data.allMarkdownRemark.nodes;

  return (
    <TopCategoriesStyles>
      <SectionTitle>Top Categories</SectionTitle>
      <ParagraphText className="info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae veniam
        fuga minima.
      </ParagraphText>
      <CategoryGrid categories={categories} />
    </TopCategoriesStyles>
  );
}

export default TopCategories;
