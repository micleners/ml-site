import PropTypes from "prop-types"
import React from "react"
import { Flex, Box } from "rebass"

import footerArt from "../images/footer_art.svg"

const Footer = ({ siteTitle }) => {


  return (
    <Box>
      <Flex mx={["2", "5%", "10%"]}>
        <img
          src={footerArt}
          style={{ maxWidth: "800px", width: "100%", margin: "auto  " }}
          alt="footer of cute, purple line art icons of smiling computers, robots, electrical plug, and human behind a computer."
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
