import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { theme } from "../utils"

import Header from "./header"
import "./layout.css"
import { Flex } from "rebass"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={theme => css`
          html,
          body {
            font-family: ${theme.fonts.text};
            color: ${theme.colors.primary};
            margin: 0;
            background: ${theme.colors.bg1};
          }

          * {
            box-sizing: border-box;
          }

          .active {
            background: ${({ theme }) => theme.colors.accent};
            color: ${({ theme }) => theme.colors.emphasis};
          }
        `}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Flex mx={["2", "5%", "10%"]} flexDirection="column">
        <main>{children}</main>
      </Flex>
      <Footer />  
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
