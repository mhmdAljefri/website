import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Card from "../components/card"
import SEO from "../components/seo"
import Input from "../components/input"
import TechnicalSkills from "../components/technical-skills"
import colorSchema from "../helpers/colorSchema"

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const BlogWrapper = styled.div`
  position: relative;
  padding: 50px 0;
`
const BlogCardsWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const Hedding = styled.h2`
  text-align: center;
  margin-bottom: 50px;
`

const StyledHeader = styled.header`
  position: relative;
  background-color: ${colorSchema.light};
  background: linear-gradient(50deg, #ffffff, #03656b29);
`
const Skew = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  left: 0;
  transform: skewY(-10deg);
  z-index: -1;
  height: 100%;
  background: inherit;
`

const ImageWrapper = styled.div`
  width: 310px;
  height: 210px;
  margin: 20px 0;
`

const IndexPage = ({
  data: {
    allMediumPost: { edges },
  },
}) => {
  const mediumImagePath = "https://miro.medium.com/"
  const mediumImageSize = "fit/c/310/210/"

  return (
    <Layout>
      <SEO title="web developer, designer, leader" />
      <StyledHeader>
        <Wrapper
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 100,
          }}
        >
          <div style={{ maxWidth: 500 }}>
            <h3>Hey, I am Mohammed Aljefri and I am</h3>
            <TechnicalSkills />
            <br />
            <br />
            <br />
            <h3 style={{ fontWeight: "300" }}>
              Founder of <a href="https://facebook.com/">Prosigners</a> team,{" "}
              <br />
              Front end Web developer at{" "}
              <strong>
                <a rel="noopener" target="_blank" href="https://clickapps.co">
                  Clickapps
                </a>{" "}
              </strong>
              form Nov 2017 until Feb 2019, <br />
              Team leader at{" "}
              <strong>
                <a rel="noopener" target="_blank" href="https://benchmark.ae">
                  Benchmark.ae
                </a>
              </strong>
              , Front end web developer at Ministry of high education and
              Scientific research of Yemen Government,
              <br />
              and I wanna do more
            </h3>
          </div>
        </Wrapper>
        <Skew />
      </StyledHeader>
      <BlogWrapper id="blog">
        <header>
          <Hedding>Blog</Hedding>
        </header>
        <BlogCardsWrapper>
          {edges.map(({ node }, key) => (
            <Card
              key={key}
              rel="noopener"
              target="_blank"
              href={`https://medium.com/@algfry12/${node.uniqueSlug}`}
            >
              <h2>{node.title}</h2>
              <ImageWrapper>
                <img
                  src={
                    mediumImagePath +
                    mediumImageSize +
                    node.virtuals.previewImage.imageId
                  }
                  alt={node.title}
                />
              </ImageWrapper>
              <p>{node.virtuals.subtitle}</p>
            </Card>
          ))}
        </BlogCardsWrapper>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card
            rel="noopener"
            target="_blank"
            href={`https://medium.com/@algfry12/`}
            style={{ backgroundColor: colorSchema.primary }}
          >
            See all
          </Card>
        </div>
      </BlogWrapper>
      <Wrapper id="contact">
        <Hedding>Contact</Hedding>
        <div style={{ maxWidth: 300, textAlign: "center", margin: "auto" }}>
          <p style={{ marginBottom: 20 }}>Ask me anything you want to ask.</p>
          <form data-netlify>
            <Input placeholder="name" />
            <Input placeholder="email" type="email" />
            <Input placeholder="your message" as="textarea">
              Your message
            </Input>
            <Card as="button" type="submit">
              Sent
            </Card>
          </form>
        </div>
      </Wrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          uniqueSlug
          virtuals {
            subtitle
            previewImage {
              imageId
            }
          }
        }
      }
    }
  }
`

export default IndexPage
