import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default function IndexPage({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>
          Home
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title}{" "}
              <span>
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark
    (sort: { fields: [frontmatter___date], order: DESC })
    {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "Do MMMM, YYYY")
            author
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`