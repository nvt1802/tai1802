import React from "react"
import { Player, BigPlayButton } from "video-react"
import "../../../node_modules/video-react/dist/video-react.css"

const Video = ({ src = "", poster = "", width = 300, height = 533 }, props) => {
  return (
    <Player
      fluid={false}
      playsInline
      poster={poster}
      src={src}
      width={300}
      height={533}
      {...props}
    >
      <BigPlayButton position="center" />
    </Player>
  )
}

export default Video
