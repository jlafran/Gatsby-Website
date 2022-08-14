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
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  EmailShareButton,
} from 'react-share';
import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  RedditIcon,
  TumblrIcon,
  LivejournalIcon,
  MailruIcon,
  ViberIcon,
  WorkplaceIcon,
  EmailIcon,
} from 'react-share';


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
        slug
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
              className="blog-cover-image" />
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
              <div className='blog-content'
                dangerouslySetInnerHTML={{ __html: texto }} /></ParagraphText>
          </div>
          <br/>
          <br/>
          <div>
          <FacebookShareButton
        url={"https://localhost:8000/blogs/"+blog.slug}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={50} round /> 
      </FacebookShareButton>
      <TwitterShareButton
        url={"https://localhost:8000/blogs/"+blog.slug}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
      >
        <TwitterIcon size={50} round /> 
      </TwitterShareButton>
      <WhatsappShareButton
        url={"https://localhost:8000/blogs/"+blog.slug}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
      >
        <WhatsappIcon size={50} round />
      </WhatsappShareButton>
      <TelegramShareButton
        url={"https://localhost:8000/blogs/"+blog.slug}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
      >
        <TelegramIcon size={50} round />
      </TelegramShareButton>
      <EmailShareButton
        url={"https://localhost:8000/blogs/"+blog.slug}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
      >
        <EmailIcon size={10} round /> 
      </EmailShareButton>
          </div>
        </div>

      </PageSpace>
    </SingleBlogStyles>
  )

}



export default SingleBlog;