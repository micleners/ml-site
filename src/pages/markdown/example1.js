import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const example1 = ({ data }) => {
  return (
    <Layout>
      <SEO title="Example 1" />
      <div
        dangerouslySetInnerHTML={{
          __html: data.allMarkdownRemark.edges[0].node.html,
        }}
      />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default example1
export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "/markdown/example1" } }) {
      html
    }
  }
`
