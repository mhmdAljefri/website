import React from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

const BlogCard = styled(animated.a)`
  cursor: pointer;
  max-width: 330px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
  padding: 10px;
  background: #fff;
  border: 0;
  text-align: center;
  width: 100%;
  display: block;
  box-shadow: 0 4px 10px 1px #eee;
  :hover {
    box-shadow: 0 4px 20px 5px #eee;
  }
  ::after {
    display: none;
  }
`

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
]
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Card({ children, ...rest }) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))
  return (
    <BlogCard
      {...rest}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      {children}
    </BlogCard>
  )
}

export default Card
