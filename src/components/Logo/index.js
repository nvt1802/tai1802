import React from "react"
import LogoImg from "assets/image/bgLogin/logo.png"

export default function Logo() {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
      }}
    >
      <img
        src={LogoImg}
        alt="bg-login"
        style={{
          margin: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "cover",
          height: "45vh",
          width: "auto",
        }}
      />
    </div>
  )
}
