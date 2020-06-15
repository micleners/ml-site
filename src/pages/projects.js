import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Flex, Box, Text } from "rebass"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import elevation from "../utils/elevation"
import { H1 } from "../components/atoms"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      ethanPortfolio: file(relativePath: { eq: "ethan_portfiolio.png" }) {
        childImageSharp {
          fixed(height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      patdWebsite: file(relativePath: { eq: "patd_website.png" }) {
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
                Website
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
      <SEO title="Projects" />
      <H1>Project</H1>
      <ProjectCard
        image={data.patdWebsite.childImageSharp.fixed}
        title="Pat Denzer"
        subtitle="Virtual Assistant"
        date="3/30/20"
        repoUrl="https://github.com/micleners/patdenzer"
        siteUrl="https://patd.micleners.com/"
        description="This brochure website was created for Pat to showcase her Virtual Assistant offerings. It was designed by Ethan using Figma. I used Gatsby to build and Netlify to deploy the site."
      />
      <ProjectCard
        image={data.ethanPortfolio.childImageSharp.fixed}
        title="Ethan Leners:"
        subtitle="Design Portfolio"
        date="1/14/20"
        repoUrl="https://github.com/ethanleners/portfolio"
        siteUrl="https://ethanleners.com/"
        description="This design portfolio was created by Ethan using Figma. We worked close together to create this portfolio. I used Gatsby to build and Netlify to deploy the site. We used Contentful to load in the content from the blogs."
      />
      <H1 fontSize={[3, 4, 5]} py={4} pt={3}>
        More projects to come...
      </H1>
    </Layout>
  )
}

export default Projects
