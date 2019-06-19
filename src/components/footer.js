import React from "react"
import styled from "styled-components"
import colorSchema from "../helpers/colorSchema"

const StyledFooter = styled.footer`
  padding: 1.45rem 1.0875rem;
  margin-top: 50px;
  background: ${colorSchema.dark};
  color: ${colorSchema.light};
`

const Footer = () => (
  <StyledFooter>
    © {new Date().getFullYear()}, Built &hearts;
    {` `} By ME
  </StyledFooter>
)

export default Footer
