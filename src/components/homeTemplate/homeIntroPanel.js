import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Flex, Text, Box } from "rebass"

const AboutMeList = props => (
  <Text
    color="secondary"
    fontSize="3"
    lineHeight="1.35"
    sx={{ textTransform: "uppercase" }}
    {...props}
  >
    {props.children}
  </Text>
)

export const HomeIntroPanel = () => {
  const data = useStaticQuery(graphql`
    query {
      micleners: file(relativePath: { eq: "micleners.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 275) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Flex py="100px" justifyContent="space-between" alignItems="flex-end">
      <Box mb="2" width="275px">
        <Img
          style={{ width: "100%" }}
          fluid={data.micleners.childImageSharp.fluid}
        />
      </Box>
      <Text width="200px" minWidth="140px" fontSize="3" mx={[3, 4]} lineHeight="1.35">
        I’m Michael Leners
      </Text>
      <Flex flexDirection="column" justifyContent="flex-end">
        <AboutMeList mb="2">full-stack web developer</AboutMeList>
        <AboutMeList mb="2">speaker</AboutMeList>
        <AboutMeList>consultant</AboutMeList>
      </Flex>
    </Flex>
  )
}
