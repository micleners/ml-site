import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const example2 = ({ data }) => {
  return (
    <Layout>
      <SEO title="Example 2" />
      <div
        dangerouslySetInnerHTML={{
          __html: data.allMarkdownRemark.edges[0].node.html,
        }}
      />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default example2
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { id: { eq: "f0232518-d6ff-52a1-aa28-032267eceb38" } }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`
