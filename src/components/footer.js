import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Flex, Box, Text } from "rebass"

import logo from "../images/logo.svg"

const Footer = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      footer: file(relativePath: { eq: "footer_art.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Box>
      <Flex mx={["2", "5%", "10%"]} >
        <Img
          style={{ width: "100%" }}
          fluid={data.footer.childImageSharp.fluid}
        />
      </Flex>
      <Flex
        backgroundColor={"bg2"}
        pr={3}
        height="70px"
        width="100%"
        alignItems="center"
        className=""
      >
        <Box flex="1 1 auto" />
      </Flex>
    </Box>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
