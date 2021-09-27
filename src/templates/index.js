import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes
  const featuredPost = data.wpPost
  const categories = data.allWpCategory.nodes
  const htmlString = data.wpPost.excerpt
  const intl = useIntl()

  return (
    <Layout isHomePage>
      <SEO title="Picture - Page d'accueil" />

      <section class="bg-primary">
        <div class="container">
          <article class="featured">
            <div>
              {featuredPost.categories.nodes.map(category => (
                <span>
                  {category.name}, {""}
                </span>
              ))}
              <Link to={featuredPost.uri}>
                <h1>{featuredPost.title}</h1>
              </Link>
              <p dangerouslySetInnerHTML={{ __html: htmlString }} />
              <Link to={featuredPost.uri}>
                <button class="btn">
                  {intl.formatMessage({ id: "read" })}
                </button>
              </Link>
            </div>
            <GatsbyImage
              image={
                featuredPost.featuredImage.node.localFile.childImageSharp
                  .gatsbyImageData
              }
              style={{
                borderRadius: `2%`,
                height: `320px`,
              }}
            />
          </article>
        </div>
      </section>

      <section class="bg-light">
        <div class="archives container">
          <div class="research">
            <h2>{intl.formatMessage({ id: "research" })}</h2>
            {categories.map(category => (
              <div class="categories">
                <ul>
                  <li>
                    <Link to={category.uri}>{category.name}</Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div class="articles">
            <ul>
              {posts.map(post => {
                const title = post.title

                return (
                  <li key={post.uri}>
                    <Link to={post.uri}>
                      <GatsbyImage
                        image={
                          post.featuredImage.node.localFile.childImageSharp
                            .gatsbyImageData
                        }
                        style={{ marginRight: `15px` }}
                        objectFit="cover"
                        objectPosition="50% 50%"
                      />
                      <h3>{post.title}</h3>
                    </Link>
                    <p>{post.date}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div class="button">
          <Link to={nextPagePath}>
            <button class="btnBis">Afficher plus d'articles</button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { order: DESC, fields: [date] }
      limit: $postsPerPage
      skip: $offset
      filter: { language: { locale: {}, name: { in: "Français" } } }
    ) {
      nodes {
        uri
        date(formatString: "DD MMMM YYYY")
        title
        excerpt
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 390, height: 250)
              }
            }
          }
        }
      }
    }

    allWpCategory(
      filter: {
        language: { name: { in: "Français" } }
        name: { nin: "Non classé" }
      }
    ) {
      nodes {
        name
        uri
      }
    }

    wpPost(slug: {eq: "siege"}) {
      title
      uri
      excerpt
      categories {
        nodes {
          name
        }
      }

      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 600)
            }
          }
        }
      }
    }
  }
`
