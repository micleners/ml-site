import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Flex, Text, Box, Heading } from "rebass"
import { H1 } from "../atoms"

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
    <>
      <Flex
        pt={[3, 4, "100px"]}
        justifyContent="space-between"
        alignItems={["center", "flex-end"]}
        // flexWrap={["wrap", "nowrap", "nowrap"]}
        flexDirection={["column", "row"]}
      >
        <Box mb="2" mt={[3, 0]} width="275px">
          <Img
            style={{ width: "100%" }}
            fluid={data.micleners.childImageSharp.fluid}
          />
        </Box>
        <Text
          width={["auto", "200px"]}
          minWidth={["auto", "140px"]}
          fontSize="3"
          mx={[0, 4]}
          my={[3, 0]}
          lineHeight="1.35"
        >
          I’m Michael Leners
        </Text>
        <Flex
          flexDirection="column"
          alignItems={["center", "flex-start"]}
          justifyContent="flex-end"
        >
          <AboutMeList mb="2">full-stack web developer</AboutMeList>
          <AboutMeList mb="2">speaker</AboutMeList>
          <AboutMeList>consultant</AboutMeList>
        </Flex>
      </Flex>
      <H1>About Me</H1>
      <Text pb={3}>
        Formerly a physics University Instructor and Chemical Engineering
        graduate student, I am now a web developer. While I originally was
        attracted to data analysis, Web Development has captured my heart. It
        keeps me engaged with the growth and learning potential it offers. I am
        originally from outside of Seattle, WA and moved to Iowa for graduate
        school in 2013. It’s probably time for me to get an “Iowa Captive”
        bumper sticker.
      </Text>
      <Text pb={5}>
        I thought I’d love backend because of my love for data analysis, but I
        find myself drawn more towards frontend development. I have worked
        professionally with Ember, Angular, Django, Dotnet Core, AWS and Azure.
        On my own, I enjoy experimenting with Vue and Gatsby and “backend as a
        service” options. I am a strong advocate for accessibility and diversity
        in tech. I continually strive to become a better ally in these areas.
      </Text>
    </>
  )
}
