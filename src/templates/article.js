import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useIntl } from "gatsby-plugin-intl"
import parse from "html-react-parser"

import {
  FaFacebookF,
  FaTwitter,
  FaComments,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa"

// We're using Gutenberg so we need the block styles
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  const featuredImage = post.featuredImage?.node?.localFile?.childImageSharp
  const relatedPosts = post.categories.nodes[0].posts.nodes
  const intl = useIntl()

  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt} />
      <section class="bg-primary zindex">
        <div class="topArticle container">
          {post.categories.nodes.map(category => (
            <span>{category.name}, </span>
          ))}
          <h1>{post.title}</h1>
          <p class="releaseDate">
            {intl.formatMessage({ id: "publishedOn" })} {post.date}
          </p>
          <GatsbyImage
            image={featuredImage.gatsbyImageData}
            alt={featuredImage.alt}
            style={{
              borderRadius: `10px`,
              marginBottom: `50px`,
              marginRight: `190px`,
            }}
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </div>
      </section>

      <section class="bg-light">
        <div class="container fullArticle">
          <div class="sharing">
            <p>Partager cet article</p>
            <ul>
              <li>
                <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A//localhost%3A8000/">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/intent/tweet?text=http%3A//localhost%3A8000/">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/intent/tweet?text=http%3A//localhost%3A8000/">
                  <FaComments />
                </a>
              </li>
            </ul>
          </div>
          <div class="article">
            {!!post.content && (
              <section itemProp="articleBody">{parse(post.content)}</section>
            )}
          </div>
        </div>
        <hr class="container" />

        <section class="relatedPosts">
          <div class="nav">
            <h1>{intl.formatMessage({ id: "related" })}</h1>
            <p>
              <a href="/">
                <FaChevronLeft />
              </a>
              <a href="/">
                <FaChevronRight />
              </a>
            </p>
          </div>
          <div class="posts">
            <ul>
              {relatedPosts.map(relatedPost => (
                <li>
                  <Link to={relatedPost.uri}>
                    <GatsbyImage
                      key={relatedPost.uri}
                      image={
                        relatedPost.featuredImage?.node?.localFile
                          ?.childImageSharp?.gatsbyImageData
                      }
                      alt={relatedPost.alt}
                      style={{
                        height: `300px`,
                        width: `450px`,
                        marginRight: `12px`,
                      }}
                    />
                    <h3>{relatedPost.title}</h3>
                  </Link>
                  <p>{relatedPost.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "DD MMMM  YYYY")
      categories {
        nodes {
          name
          posts {
            nodes {
              title
              uri
              date(formatString: "DD MMMM  YYYY")
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width: 1000, height: 400)
                    }
                  }
                }
              }
            }
          }
        }
      }
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1000, height: 600)
            }
          }
        }
      }
    }
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
