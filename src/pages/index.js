import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { HomeIntroPanel } from "../components/homeTemplate"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeIntroPanel />
  </Layout>
)

export default IndexPage
