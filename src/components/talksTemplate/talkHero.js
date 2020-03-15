import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Box, Heading, Text } from "rebass"
import { css, jsx } from "@emotion/core"
import { TalkCard } from "../organisms"

export const TalkHero = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulEvent {
        edges {
          node {
            id
            title
            subtitle
            date: time(formatString: "M/D/YYYY")
            time: time(formatString: "h:mma")
            abstract {
              childMarkdownRemark {
                excerpt
                html
              }
            }
          }
        }
      }
      micleners: file(relativePath: { eq: "micleners.jpeg" }) {
        childImageSharp {
          fixed(height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const talkList = data.allContentfulEvent.edges
    .sort((a, b) => new Date(b.node.date) - new Date(a.node.date))
    .map(edge => {
      return {
        name: edge.node.title + " " + edge.node.subtitle,
        id: edge.node.id,
      }
    })

  // const filteredList = talkList => talkList.filter((v, i) => talkList.indexOf(v.name) === i.name)
  return (
    <Flex justifyContent="space-between" flexDirection="column">
      <Heading pt={5} as="h1" fontSize={7}>
        Talks
      </Heading>
      <Heading pt={3} as="h2" fontSize={5}>
        Short List
      </Heading>
      <Box py="20px">
        {talkList.map(talk => {
          return (
            <a
              href={`#${talk.id}`}
              css={theme => css`
                color: ${theme.colors.secondary};
                transition-duration: 0.2s;
                &:hover {
                  color: ${theme.colors.accent};
                  background: ${theme.colors.accent};
                  transform: scale(1.01);
                }
              `}
            >
              <Text p={1}>{talk.name}</Text>
            </a>
          )
        })}
      </Box>
    </Flex>
  )
}
