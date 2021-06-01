import React from "react"

const Version = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0.5em",
        left: "0.5em",
        opacity: 0.8,
        fontSize: "0.9em",
        fontWeight: "bold",
        fontStyle: "italic",
        textDecoration: "underline",
        color: "#ffff",
      }}
    >
      {`Ver ${process.env?.REACT_APP_VERSION}`}
    </div>
  )
}

export default Version
