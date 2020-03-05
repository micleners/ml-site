import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa"
import { Flex } from "rebass"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>

    <FaFacebookSquare />
    <FaLinkedin />
    <FaTwitter />
    <FaPinterest />
    <FaInstagram />

    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Flex flexDirection="column">
      <Link to="/markdown/example1">Link to Content from Markdown</Link>
      <Link to="/markdown/example2">Another link to Content from Markdown</Link>
    </Flex>
  </Layout>
)

export default IndexPage
