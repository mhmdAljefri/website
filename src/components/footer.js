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
    © {new Date().getFullYear()}, Built With &hearts;
    {` `} By ME
    <div>
      <a href="https://github.com/mhmdAljefri">Github</a>
      <a href="https://www.facebook.com/prosigner.mohmd">Facebook</a>
      <a href="https://twitter.com/mhmdAljefri">Twitter</a>
    </div>
  </StyledFooter>
)

export default Footer
