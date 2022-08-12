import React from 'react';
import { CategoryGridStyles } from '../../styles/category/CategoryGridStyles';
import CategoryItem from './CategoryItem';

function CategoryGrid({ categories }) {
  return (
    <CategoryGridStyles>
      {categories.map((item) => (
        <CategoryItem
          title={item.title}
          description={item.description}
          slug={item.slug}
        />
      ))}
    </CategoryGridStyles>
  );
}

export default CategoryGrid;
