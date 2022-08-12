import React from 'react';
import { CategoryGridStyles } from '../../styles/category/CategoryGridStyles';
import CategoryItem from './CategoryItem';

function CategoryGrid({ categories }) {
  return (
    <CategoryGridStyles>
      {categories.map((item) => (
        <CategoryItem
          key={item.id}
          title={item.frontmatter.title}
          description={item.frontmatter.description}
          slug={item.frontmatter.slug}
        />
      ))}
    </CategoryGridStyles>
  );
}

export default CategoryGrid;
