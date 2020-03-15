import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { TalkList, TalkHero } from "../components/talksTemplate"

const Blog = () => (
  <Layout>
    <SEO title="Talks" />
    <TalkHero />
    <TalkList />
  </Layout>
)

export default Blog
