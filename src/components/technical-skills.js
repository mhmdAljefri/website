import React, { useState, useEffect } from "react"
import colorSchema from "../helpers/colorSchema"

const TechnicalSkills = () => {
  const word = "Developer, Designer, Speaker, Writter, Leader".split(",")
  const [wordIndex, setWordIndex] = useState(0)
  useEffect(() => {
    const newIndex = wordIndex + 1 === word.length ? 0 : wordIndex + 1
    setTimeout(() => {
      setWordIndex(newIndex)
    }, 2000)
  }, [wordIndex])

  return (
    <h1 style={{ color: colorSchema.primary }}>
      <span style={{ color: colorSchema.dark }}>Front end Web</span>{" "}
      {word[wordIndex]} :)
    </h1>
  )
}

export default TechnicalSkills
