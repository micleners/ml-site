import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { css, jsx } from "@emotion/core"
import elevation from "../../utils/elevation"
import { Flex, Text, Box } from "rebass"

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
        ${"" /* color: ${theme.colors.primary}; */}
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

export const TalkCard = ({
  id,
  image,
  title,
  subtitle,
  date,
  description,
  eventUrl,
  presentationUrl,
  repoUrl,
  time,
}) => {
  console.log(eventUrl)
  return (
    <Flex
      flexDirection={["column", "column", "row"]}
      p={4}
      my={[2, 3, 4]}
      backgroundColor={"bg2"}
      width="100%"
      sx={{ borderRadius: "5px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
    >
      <Box
        mr={3}
        width="200px"
        height="200px"
        backgroundColor="bg3"
        sx={{ borderRadius: "5px" }}
      >
        <Img
          fixed={image}
          style={{ width: "100%", height: "100%", borderRadius: "5px" }}
        />
      </Box>
      <Flex width="100%" flexDirection="column" alignItems="space-between">
        <Flex
          alignItems="baseline"
          mb={3}
          flexDirection={["column", "column", "column"]}
        >
          {title && (
            <a name={id}>
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
            </a>
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
          <Box mb={3} fontSize={[0, 1]}>
            {description}
          </Box>
        )}
        <Flex
          mt="auto"
          width="100%"
          flexDirection={["column", "row"]}
          alignItems="flex-start"
        >
          <a href={eventUrl} style={{textDecoration: "none"}}>
            <Button mr={[0, 4]} mb={[2, 0]}>
              Event
            </Button>
          </a>
          <a href={repoUrl} style={{textDecoration: "none"}}>
            <Button mr={[0, 4]} mb={[2, 0]}>
              Code
            </Button>
          </a>
          <a href={`${presentationUrl}`} style={{textDecoration: "none"}}>
            <Button>Presentation</Button>
          </a>
        </Flex>
      </Flex>
    </Flex>
  )
}
