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
          __html: data.html,
        }}
      />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default example2
export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "/markdown/example2" } }) {
      html
    }
  }
`
