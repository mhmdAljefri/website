import React from "react"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel as RRCarousel } from "react-responsive-carousel"

export default function Carousel() {
  return (
    <RRCarousel>
      <div>
        <img src="assets/1.jpeg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="assets/2.jpeg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="assets/3.jpeg" />
        <p className="legend">Legend 3</p>
      </div>
    </RRCarousel>
  )
}
