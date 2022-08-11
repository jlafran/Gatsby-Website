import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { TopCategoriesStyles } from '../../styles/homePage/TopCategoriesStyles';
import CategoryGrid from '../category/CategoryGrid';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';

function TopCategories() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {featured: {eq: "Yes"}}}) {
    edges {
      node {
        frontmatter {
          categoriesSlug
          categoriesTitle
        }
        id
      }
    }
    distinct(field: frontmatter___categoriesSlug)
  }
    }
  `);
  const categories = data.allMarkdownRemark.edges;
  

  var category = []

  category.push(categories[0])
  
  
  for (var i = 0; i < categories.length; i++){
    for (var j = 0; j < category.length; j++){
      if (category[j].node.frontmatter.categoriesSlug != categories[i].node.frontmatter.categoriesSlug){
        category.push(categories[i])
    }
  }
}
  return (
    <TopCategoriesStyles>
      <SectionTitle>Top Categories</SectionTitle>
      <ParagraphText className="info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae veniam
        fuga minima.
      </ParagraphText>
      <CategoryGrid categories={category} />
    </TopCategoriesStyles>
  );
}

export default TopCategories;
