import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { css, jsx } from "@emotion/core"
import { Flex, Box, Text } from "rebass"
import { theme } from "../utils/theme"
import { Burger } from "./atoms"

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
      <Box p={[3, 0]}>{props.text}</Box>
    </Link>
  </Box>
)

const HeaderLink = styled(MenuLink)``

const Header = props => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const SlidingMenu = styled(Flex)`
    background: ${theme.colors.bg2};
    transition-duration: 0.2s;
    position: absolute;
    right: 0;
    top: 70px;
    transform: translateY(calc(-140%));
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-140%)")};
  `

  return (
    <Flex
      backgroundColor={"bg2"}
      pr={3}
      height="70px"
      width="100%"
      alignItems="center"
      className=""
    >
      <SlidingMenu flexDirection="column" open={isMenuOpen}>
        <HeaderLink
          text="Projects"
          to="/projects/"
          display={["flex", "none"]}
        />
        <HeaderLink text="Talks" to="/talks/" display={["flex", "none"]} />
        <HeaderLink text="Blog" to="/blog/" display={["flex", "none"]} />
      </SlidingMenu>
      <Box
        as="img"
        src={logo}
        p={1}
        mx={1}
        height="100%"
        alignSelf="stretch"
        alt="white line art icon of person behind a computer"
      />
      <HeaderLink activeClassName="active" text="Michael Leners" to="" />
      <Box flex="1 1 auto" />
      <HeaderLink text="Projects" to="/projects/" display={["none", "flex"]} />
      <HeaderLink text="Talks" to="/talks/" display={["none", "flex"]} />
      <HeaderLink text="Blog" to="/blog/" display={["none", "flex"]} />
      <Box display={["flex", "none"]}>
        <Burger onClick={open => setIsMenuOpen(!isMenuOpen)}>
          <div />
          <div />
          <div />
        </Burger>
      </Box>
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
