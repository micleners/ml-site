import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Flex, Box, Text } from "rebass"

import footerArt from "../images/footer_art.svg"

const Footer = ({ siteTitle }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     footer: file(relativePath: { eq: "footer_art.svg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 800) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Box>
      <Flex mx={["2", "5%", "10%"]}>
        {/* <Img
          style={{ maxWidth: "800px", width: "100%", margin: "auto  " }}
          fluid={data.footer.childImageSharp.fluid}
        /> */}
        <img
          src={footerArt}
          style={{ maxWidth: "800px", width: "100%", margin: "auto  " }}
          alt="footer image of cute, purple line art icons of smiling computers, robots, electrical plug, and human behind a computer."
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
