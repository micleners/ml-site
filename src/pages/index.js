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
import { HomeIntroPanel } from "../components/homeTemplate"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeIntroPanel />
  </Layout>
)

export default IndexPage
