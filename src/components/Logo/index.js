import React from "react"
// import LogoImg from "assets/image/Logo/logo.png"
import { makeStyles } from "@material-ui/core"
import clsx from "clsx"

export default function Logo() {
  const classes = useStyles()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100vh"
      version="1.1"
      viewBox="0 0 837 1045"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="6">
        <path
          stroke="#007FB2"
          className={clsx(classes.svg, classes.animatedItem)}
          d="M353 9l273.664 161v317L353 642 79.336 487V170L353 9z"
        ></path>
        <path
          stroke="#EF4A5B"
          className={clsx(classes.svg, classes.animatedItem)}
          style={{ animationDelay: ".2s" }}
          d="M78.5 529l68.5 40.186v79.125L78.5 687 10 648.311v-79.125L78.5 529z"
        ></path>
        <path
          stroke="#795D9C"
          className={clsx(classes.svg, classes.animatedItem)}
          style={{ animationDelay: ".4s" }}
          d="M773 186l54 31.539v62.098L773 310l-54-30.363v-62.098L773 186z"
        ></path>
        <path
          stroke="#F2773F"
          className={clsx(classes.svg, classes.animatedItem)}
          style={{ animationDelay: ".6s" }}
          d="M639 529l134 78.847v155.245L639 839l-134-75.908V607.847L639 529z"
        ></path>
        <path
          stroke="#36B455"
          className={clsx(classes.svg, classes.animatedItem)}
          style={{ animationDelay: ".8s" }}
          d="M281 801l102 60.025v118.187L281 1037l-102-57.788V861.025L281 801z"
        ></path>
      </g>
    </svg>
  )
}

const useStyles = makeStyles(() => ({
  messageBox: {
    height: "200px",
    width: "380px",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: "-100px",
    marginLeft: "50px",
    color: "#fff",
    fontFamily: "Roboto",
    fontWeight: "300",
  },
  h1: {
    fontSize: "60px",
    lineHeight: "46px",
    marginBottom: "40px",
  },
  buttonsConActionLinkWrap: {
    marginTop: "40px",
  },
  buttonsConActionLinkWrapA: {
    background: "#68c950",
    padding: "8px 25px",
    borderRadius: "4px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "14px",
    transition: "all 0.3s linear",
    cursor: "pointer",
    textDecoration: "none",
    marginRight: "10px",
    "& hover": {
      background: "#5a5c6c",
      color: "#fff",
    },
  },
  animatedItem: {
    animation: `$float 1s infinite ease-in-out alternate`,
  },
  "@keyframes float": {
    "100%": {
      transform: "translateY(50px)",
    },
  },
  svg: {
    position: "absolute",
    top: "50%",
    left: " 50%",
    marginTop: "-250px",
    marginLeft: "-400px",
  },
  "@media (max-width: 525px)": {
    svg: {
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: "-250px",
      marginLeft: "-190px",
    },
    messageBox: {
      top: "50%",
      left: "50%",
      marginTop: "-100px",
      marginLeft: "-190px",
      textAlign: "center",
    },
  },
}))
