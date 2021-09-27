import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogCategoryTemplate = ({ data }) => {
  const category = data.wpCategory
  const categories = data.allWpCategory.nodes
  const posts = data.allWpPost.edges
  const intl = useIntl()

  return (
    <Layout>
      <SEO title="Picture - Archives" />

      <section class="titleArchive bg-primary">
        <div class="container">
          <p>{intl.formatMessage({ id: "news" })}</p>
          <h1>{category.name}</h1>
        </div>
      </section>

      <section class="bg-lightBis">
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
                return (
                  <li key={post.node.uri}>
                    <Link to={post.node.uri}>
                      <GatsbyImage
                        image={
                          post.node.featuredImage.node.localFile.childImageSharp
                            .gatsbyImageData
                        }
                        style={{ marginRight: `15px` }}
                        objectFit="cover"
                        objectPosition="50% 50%"
                      />
                      <h3>{post.node.title}</h3>
                    </Link>
                    <p>{post.node.date}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div class="pagination"></div>
      </section>
    </Layout>
  )
}

export default BlogCategoryTemplate

export const query = graphql`
  query BlogPotsByCategory($id: String!) {
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { id: { eq: $id } } } } }
      sort: { fields: date, order: DESC }
      limit: 6
    ) {
      edges {
        node {
          id
          title
          uri
          date(formatString: "MMMM DD, YYYY")
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
    wpCategory(id: { eq: $id }) {
      name
    }
  }
`
