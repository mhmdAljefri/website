/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"

import Header from "./header"
import Footer from "./footer"
import colorSchema from "../helpers/colorSchema"

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: ${colorSchema.dark};
    background: #fff;
  }
  a {
    position: relative;
    display: inline-block;
    color: ${colorSchema.primary};
    text-decoration: none;
    ::after {
      content: '';
      position: absolute;
      transition: all ease-in-out 400ms;
      bottom: 0;
      right: 0;
      left: 0;
      height: 5px;
      z-index: -1;
      background: ${colorSchema.light}
    }
    :hover {
      color: ${colorSchema.dark};
      
      ::after {
        height: 100%;
       }
    }
  }
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Layout = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false)

  function toggleTheme() {
    setDarkTheme(!darkTheme)
  }
  return (
    <>
      <GlobalStyle darkTheme={darkTheme} />
      <Header onToggleTheme={toggleTheme} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
