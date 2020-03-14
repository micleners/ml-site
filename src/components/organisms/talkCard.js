import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { css, jsx } from "@emotion/core"
import { theme } from "../../utils"
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
        transform: scale(1.01);
        ${elevation[4]}
      }
    `}
    {...props}
  >
    {props.children}
  </Text>
)

export const TalkCard = ({ image, title, date, description, urls }) => {
  return (
    <Flex
      flexDirection={["column", "column", "row"]}
      p={4}
      backgroundColor={"bg2"}
      width="100%"
      sx={{ borderRadius: "5px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
    >
      <Box
        mr={3}
        // width="210px"
        // height="210px"
        // p="10px"
        width="200px"
        height="200px"
        backgroundColor="bg3"
        sx={{ borderRadius: "5px" }}
      >
        <Img
          fluid={image}
          style={{ width: "100%", height: "100%", borderRadius: "5px" }}
        />
      </Box>
      <Flex width="100%" flexDirection="column" alignItems="space-between">
        <Flex
          alignItems="baseline"
          mb={3}
          flexDirection={["column", "column", "row"]}
        >
          <Text fontSize={[2, 3]} mt={[3, 3, 0]} mr={[0, 4]} color="primary">
            {title}
          </Text>
          <Text fontSize={[1, 2]} mt={[3, 3, 0]} color="primary">
            {date}
          </Text>
        </Flex>
        <Box mb={3}>{description}</Box>
        <Flex mt="auto" width="100%">
          <Button mr={4}>Details</Button>
          <Button mr={4}>Code</Button>
          {/* <Button>Talks</Button> */}
        </Flex>
      </Flex>
    </Flex>
  )
}
