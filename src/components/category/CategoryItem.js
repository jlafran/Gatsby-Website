import React from 'react';
import Button from '../buttons/Button';
import { buttonTypes } from '../../constants/buttonTypes';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';
import { Title } from '../typography/Title';

function CategoryItem({ title, slug }) {
  return (
    <CategoryItemStyles>
      <Title className="title">{title}</Title>
      <Button to={`/categories/${slug}`} variant={buttonTypes.outline}>
        Explore Category
      </Button>
    </CategoryItemStyles>
  );
}

export default CategoryItem;
