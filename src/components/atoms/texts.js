import React from "react"
import { Heading } from "rebass"

export const H1 = props => (
  <Heading pt={[4, 5]} as="h1" fontSize={[5, 6, 7]} {...props}>
    {props.children}
  </Heading>
)
