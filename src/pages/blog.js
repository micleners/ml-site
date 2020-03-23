import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Flex, Box, Text } from "rebass"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import elevation from "../utils/elevation"
import { H1 } from "../components/atoms"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      cypressBlog1: file(relativePath: { eq: "cypress_blog_1.png" }) {
        childImageSharp {
          fixed(height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const Button = props => (
    <Text
      color="bg1"
      bg="secondary"
      p={2}
      fontSize="2"
      sx={{ textTransform: "uppercase" }}
      css={theme => css`
        ${elevation[2]}
        border-radius: 5px;
        transition-duration: 0.2s;
        &:hover {
          background: ${theme.colors.accent};
          color: ${theme.colors.primary};
          transform: scale(1.01);
          ${elevation[4]}
        }
      `}
      {...props}
    >
      {props.children}
    </Text>
  )

  const ProjectCard = ({
    id,
    image,
    talkImage,
    title,
    subtitle,
    date,
    description,
    siteUrl,
    repoUrl,
  }) => {
    return (
      <Flex
        flexDirection={["column", "column", "row"]}
        p={[2, 3, 4]}
        my={[2, 3, 4]}
        backgroundColor={"bg2"}
        width="100%"
        sx={{
          borderRadius: "5px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Box
          mr={3}
          width="200px"
          minWidth="200px"
          height="200px"
          backgroundColor="bg3"
          alignSelf={["center", "flex-start"]}
          sx={{ borderRadius: "5px" }}
        >
          {!talkImage && (
            <Img
              fixed={image}
              style={{ width: "100%", height: "100%", borderRadius: "5px" }}
            />
          )}
        </Box>
        <Flex width="100%" flexDirection="column" alignItems="space-between">
          <Flex
            alignItems="baseline"
            flexDirection={["column", "column", "column"]}
          >
            {title && (
              <Text
                sx={{ textTransform: "uppercase" }}
                fontSize={[2, 3, 4]}
                mt={[3, 3, 0]}
                mr={[0, 4]}
                lineHeight="1"
                color="primary"
              >
                {title}
              </Text>
            )}
            {subtitle && (
              <Text
                sx={{ textTransform: "uppercase" }}
                fontSize={[1, 2, 3]}
                mt={[1, 1, 0]}
                mr={[0, 4]}
                lineHeight="1"
                color="primary"
              >
                {subtitle}
              </Text>
            )}
            {date && (
              <Text fontSize={[0, 1]} mt={[2, 2, 2]} color="primary">
                {date}
              </Text>
            )}
          </Flex>
          {description && (
            <Box
              mb={3}
              fontSize={[0, 1]}
              css={theme => css`
                a {
                  color: ${theme.colors.secondary};
                  &:hover {
                    background: ${theme.colors.accent};
                    color: ${theme.colors.primary};
                  }
                }
              `}
            >
              {description}
            </Box>
          )}
          <Flex
            mt="auto"
            width="100%"
            flexDirection={["row"]}
            alignItems={["flex-start"]}
            justifyContent={["space-around", "flex-start"]}
            flexWrap="wrap"
          >
            <a href={siteUrl} style={{ textDecoration: "none" }}>
              <Button mr={[0, 4]} mb={[2, 0]}>
                View Blog
              </Button>
            </a>
            <a href={repoUrl} style={{ textDecoration: "none" }}>
              <Button mr={[0, 4]} mb={[2, 0]}>
                Code
              </Button>
            </a>
          </Flex>
        </Flex>
      </Flex>
    )
  }

  return (
    <Layout>
      <SEO title="Blog" />
      <H1>Blog</H1>
      <ProjectCard
        image={data.cypressBlog1.childImageSharp.fixed}
        title="Cypress for E2E Testing:"
        subtitle="An Overview of the Platform and Its Uses"
        date="2/12/20"
        repoUrl="https://github.com/micleners/cypress-retro"
        siteUrl="https://www.sourceallies.com/2020/02/cypress-for-e2e-testing-retro/"
        description="This blog is part of a series on end-to-end (E2E) testing in Cypress. In this post, we will take a look at what Cypress is, why our team chose it, and things you may want to consider when evaluating it for your own projects. Future posts will expound upon how my team uses Cypress and technicals around using Cypress."
      />
      <H1 fontSize={[3, 4, 5]} py={4} pt={3}>
        More blogs to come...
      </H1>
    </Layout>
  )
}

export default Blog
