import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Heading } from "rebass"
import { TalkCard } from "../organisms"

export const TalkList = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulEvent {
        edges {
          node {
            id
            title
            subtitle
            url
            repo
            presentation
            date: time(formatString: "M/D/YYYY")
            time: time(formatString: "h:mma")
            abstract {
              childMarkdownRemark {
                excerpt
                html
              }
            }
            image {
              file {
                url
              }
            }
            instances {
              id
              date: time(formatString: "M/D/YYYY")
              organizer {
                name
              }
              sponsor {
                businessName
              }
              location {
                name
              }
              url
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
  return (
    <Flex justifyContent="space-between" flexDirection="column">
      <Heading pt={3} as="h2" fontSize={[3, 4, 5]}>
        Details
      </Heading>

      {data.allContentfulEvent.edges
        .sort((a, b) => new Date(b.node.date) - new Date(a.node.date))
        .map(edge => {
          return (
            <TalkCard
              key={edge.node.id}
              title={edge.node.title}
              date={edge.node.date}
              time={edge.node.time}
              subtitle={edge.node.subtitle}
              excerpt={edge.node.abstract.childMarkdownRemark.excerpt}
              description={edge.node.abstract.childMarkdownRemark.html}
              image={data.micleners.childImageSharp.fixed}
              talkImage={edge.node.image ? edge.node.image.file.url : null}
              instances={edge.node.instances}
              eventUrl={edge.node.url}
              repoUrl={edge.node.repo}
              presentationUrl={edge.node.presentation}
              id={edge.node.id}
            ></TalkCard>
          )
        })}
    </Flex>
  )
}
