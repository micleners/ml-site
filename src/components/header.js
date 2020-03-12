import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { Flex, Box, Text } from "rebass"

import logo from "../images/logo.svg"

const MenuLink = props => (
  <Flex
    alignItems="center"
    px={3}
    height="100%"
    backgroundColor={"accent"}
    sx={{ textDecoration: "none" }}
    color="primary"
    as={Link}
    fontSize={"2"}
    {...props}
  >
    {props.text}
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
    <Box as="img" src={logo} p={2} hieght="100%" alignSelf="stretch" />
    <HeaderLink activeClassName="active" text="Michael Leners" to="" />
    <Box flex="1 1 auto" />
    <HeaderLink
      bg="none"
      activeClassName="active"
      text="Projects"
      to="/projects/"
    />
    <HeaderLink bg="none" activeClassName="active" text="Talks" to="/talks/" />
    <HeaderLink bg="none" activeClassName="active" text="Blog" to="/blog/" />
  </Flex>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
