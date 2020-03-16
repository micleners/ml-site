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
  talkImage,
  title,
  subtitle,
  date,
  excerpt,
  description,
  eventUrl,
  presentationUrl,
  repoUrl,
  time,
  instances,
}) => {
  return (
    <Flex
      flexDirection={["column", "column", "row"]}
      p={[2, 3, 4]}
      my={[2, 3, 4]}
      backgroundColor={"bg2"}
      width="100%"
      sx={{ borderRadius: "5px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
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
        {talkImage && (
          <img
            src={talkImage}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "5px",
              justifySelf: "center",
            }}
          />
        )}
      </Box>
      <Flex width="100%" flexDirection="column" alignItems="space-between">
        <Flex
          alignItems="baseline"
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
          {!instances && date && (
            <Text fontSize={[0, 1]} mt={[2, 2, 2]} color="primary">
              {date}
            </Text>
          )}

          {instances &&
            instances.map(instance => (
              <Flex
                key={instance.id}
                mt={[2, 2, 2]}
                flexWrap="wrap"
              >
                <Text fontSize={[0, 1]} pr={2} color="primary">
                  {instance.date}
                </Text>
                {instance.organizer && instance.organizer.name && (
                  <Text fontSize={[0, 1]} pr={2} color="primary">
                    with {instance.organizer.name}
                  </Text>
                )}
                {instance.location && instance.location.name && (
                  <Text fontSize={[0, 1]} color="primary">
                    at {instance.location.name}
                  </Text>
                )}
              </Flex>
            ))}
        </Flex>
        {description && (
          <Box
            mb={3}
            fontSize={[0, 1]}
            dangerouslySetInnerHTML={{ __html: description }}
            css={theme => css`
              a {
                color: ${theme.colors.secondary};
                &:hover {
                  background: ${theme.colors.accent};
                  color: ${theme.colors.primary};
                }
              }
            `}
          />
        )}
        <Flex
          mt="auto"
          width="100%"
          flexDirection={["row"]}
          alignItems={["flex-start"]}
          justifyContent={["space-around", "flex-start"]}
          flexWrap="wrap"
        >
          <a href={eventUrl} style={{ textDecoration: "none" }}>
            <Button mr={[0, 4]} mb={[2, 0]}>
              Event
            </Button>
          </a>
          <a href={repoUrl} style={{ textDecoration: "none" }}>
            <Button mr={[0, 4]} mb={[2, 0]}>
              Code
            </Button>
          </a>
          <a href={presentationUrl} style={{ textDecoration: "none" }}>
            <Button>Presentation</Button>
          </a>
        </Flex>
      </Flex>
    </Flex>
  )
}
