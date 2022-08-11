import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';
import React from 'react';
import { BlogItemStyles } from '../../styles/blog/BlogItemStyles';
import ParagraphText from '../typography/ParagraphText';
import { Title } from '../typography/Title';

function BlogItem({ path, title, image, categories, categoriesPath, publishedAt }) {
  return (
    <BlogItemStyles>
      <Link to={`/blogs/${path}`}>
        <GatsbyImage
          image={image.imageData}
          alt={image.altText}
          className="img"
        />
      </Link>
      <Link to={`/blogs/${path}`}>
        <Title className="title">{title}</Title>
      </Link>
      {publishedAt && (
        <ParagraphText className="publishedAt">
          {format(new Date(publishedAt), 'p, MMMM dd, yyyy')}
        </ParagraphText>
      )}
      <ParagraphText className="categoriesText">
          <span key={categoriesPath}>
            <Link to={`/categories/${categoriesPath}`}>{categories}</Link>
          </span>
      </ParagraphText>
    </BlogItemStyles>
  );
}

export default BlogItem;
