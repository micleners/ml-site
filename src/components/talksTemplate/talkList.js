import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Text, Box } from "rebass"
import { TalkCard } from "../organisms"

export const TalkList = () => {
  const data = useStaticQuery(graphql`
    query {
      micleners: file(relativePath: { eq: "micleners.jpeg" }) {
        childImageSharp {
          fixed(height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Flex py="100px" justifyContent="space-between">
      <TalkCard
        title="Gatsby and Contentful"
        date="3/11/20"
        description="This is the description of the talk. I mention for what organization it was a part of. I also mention the location maybe? Duration? Maybe something witty too."
        image={data.micleners.childImageSharp.fixed}
      ></TalkCard>
    </Flex>
  )
}
