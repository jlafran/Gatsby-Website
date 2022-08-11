import React from 'react';
import { CategoryGridStyles } from '../../styles/category/CategoryGridStyles';
import CategoryItem from './CategoryItem';

function CategoryGrid({ categories }) {
  return (
    <CategoryGridStyles>
      {categories.map((item) => (
        <CategoryItem
          key={item.id}
          title={item.node.frontmatter.categoriesTitle}
          slug={item.node.frontmatter.categoriesSlug}
        />
      ))}
    </CategoryGridStyles>
  );
}

export default CategoryGrid;
