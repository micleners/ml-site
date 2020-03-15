import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "@emotion/styled"
import { Flex, Box, Text } from "rebass"
import { theme } from "../utils/theme"

import logo from "../images/logo.svg"

const MenuLink = props => (
  <Box
    alignItems="center"
    height="100%"
    backgroundColor={"bg2"}
    sx={{ textDecoration: "none" }}
    color="primary"
    fontSize={"2"}
    {...props}
  >
    <Link
      activeClassName="active"
      style={{
        textDecoration: "none",
        color: theme.colors.primary,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 16px",
      }}
      {...props}
    >
      {props.text}
    </Link>
  </Box>
)

const HeaderLink = styled(MenuLink)``

const Header = ({ siteTitle }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  //   <button onClick={toggleMobileMenu} style={{color: theme.color.primary}}>
  //   <MenuIcon/>
  // </button>
  return (
    <Flex
      backgroundColor={"bg2"}
      pr={3}
      height="70px"
      width="100%"
      alignItems="center"
      className=""
    >
      <Box as="img" src={logo} p={1} mx={1} height="100%" alignSelf="stretch" alt="white line art icon of person behind a computer" />
      <HeaderLink activeClassName="active" text="Michael Leners" to="" />
      <Box flex="1 1 auto" />
      <HeaderLink text="Projects" to="/projects/" display={["none", "flex"]} />
      <HeaderLink text="Talks" to="/talks/" display={["none", "flex"]} />
      <HeaderLink text="Blog" to="/blog/" display={["none", "flex"]} />
    </Flex>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
