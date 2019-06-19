import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const List = styled.li`
  list-style: none;
  margin: 5px;
`

const Ul = styled.ul`
  display: flex;
`

const StyledHeader = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
`

const Wrapper = styled.div`
  margin: 0px auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = () => (
  <StyledHeader>
    <Wrapper>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          mhmdAljefri
        </Link>
      </h1>
      <nav>
        <Ul>
          <List>
            <a href="#blog">Blog</a>
          </List>
          <List>
            <a href="#contact">Contact</a>
          </List>
        </Ul>
      </nav>
    </Wrapper>
  </StyledHeader>
)

export default Header
