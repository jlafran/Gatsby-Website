import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { format } from 'date-fns';
import { BiCategory } from 'react-icons/bi';
import { FiCalendar, FiUser } from 'react-icons/fi';
import PageSpace from '../components/PageSpace';
import ParagraphText from '../components/typography/ParagraphText';
import { Title } from '../components/typography/Title';
import { SingleBlogStyles } from '../styles/blog/SingleBlogStyles';
import SEO from '../components/seo';

export const postQuery = graphql`
  query SingleBlogQuery($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        description
        date
        categoriesTitle
        categoriesSlug
      }
      html
    }
  }
`;

function SingleBlog({data}) {
  const blog = data.markdownRemark.frontmatter;
  const texto = data.markdownRemark.html;
  return(
    <SingleBlogStyles>
    <SEO title={blog.title} />
    <PageSpace top={80} bottom={100}>
      <div className="container">
        <div className="blog-header">
          <GatsbyImage
            image={blog.featuredImage.childImageSharp.gatsbyImageData}
            className="blog-cover-image"
          />
          <Title className="title">{blog.title}</Title>
          <ParagraphText className="publishedAt">
              <FiCalendar />
              {format(new Date(blog.date), 'p, MMMM dd, yyyy')}
            </ParagraphText>
            <ParagraphText className="categoriesText">
              <BiCategory />
              {blog.categoriesTitle}
            </ParagraphText>
          <ParagraphText>
          <div 
            dangerouslySetInnerHTML={{__html: texto}} /></ParagraphText>
          </div>
          </div>
    </PageSpace>
  </SingleBlogStyles>
  )

}



export default SingleBlog;