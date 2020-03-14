import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { Flex, Box, Text } from "rebass"
import { theme } from "../utils/theme"

import logo from "../images/logo.svg"

const MenuLink = props => (
  <Flex
    alignItems="center"
    // px={3}
    height="100%"
    backgroundColor={"bg2"}
    sx={{ textDecoration: "none" }}
    color="primary"
    fontSize={"2"}
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
  </Flex>
)

const HeaderLink = styled(MenuLink)``

const Header = ({ siteTitle }) => (
  <Flex
    backgroundColor={"bg2"}
    pr={3}
    height="70px"
    width="100%"
    alignItems="center"
    className=""
  >
    <Box as="img" src={logo} p={1} mx={1} height="100%" alignSelf="stretch" />
    <HeaderLink activeClassName="active" text="Michael Leners" to="" />
    <Box flex="1 1 auto" />
    <HeaderLink
      bg="none"
      activeClassName="active"
      text="Projects"
      to="/projects/"
    />
    <HeaderLink text="Talks" to="/talks/" />
    <HeaderLink activeClassName="active" text="Blog" to="/blog/" />
  </Flex>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
