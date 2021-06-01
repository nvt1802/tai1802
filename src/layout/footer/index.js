import React from "react"
import clsx from "clsx"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"
import { Divider, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  divider: {
    width: "90%",
    margin: "auto",
    backgroundColor: "#ffffff",
  },
  container: {
    color: "#ffffff",
    textAlign: "left",
  },
  textWhile: {
    color: "#ffffff",
  },
  footer: {
    paddingTop: "0.5em",
    backgroundColor: "#000000",
  },
  textAlign: {
    textAlign: "left",
  },
  listUnstyled: {
    paddingLeft: 0,
    listStyle: "none",
  },
  row: {
    display: "flex",
    justifyContent: "space-around",
  },
  colSize4: {
    flex: "0 0 40%",
    maxWidth: "40%",
  },
  mr2: {
    marginRight: "2em",
  },
  bottom: {
    color: "#ffffff",
    textAlign: "center",
    paddingBottom: "1rem",
  },
  mt2: {
    marginTop: "2em",
  },
})

const Footer = () => {
  const classes = useStyles()

  return (
    <MDBFooter color="blue" className={classes.footer}>
      <MDBContainer fluid className={classes.container}>
        <MDBRow className={classes.row}>
          <MDBCol className={clsx(classes.colSize4, classes.mr2)}>
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol className={classes.colSize4}>
            <h5 className="title">Links</h5>
            <ul>
              <li className={classes.listUnstyled}>
                <a href="#!">Link 1</a>
              </li>
              <li className={classes.listUnstyled}>
                <a href="#!">Link 2</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Divider className={classes.divider} />
      <div className={classes.bottom}>
        <MDBContainer fluid className={classes.mt2}>
          <span
            style={{
              fontSize: "0.9em",
              fontWeight: "bold",
              fontStyle: "italic",
              textDecoration: "underline",
              color: "#ffff",
              marginRight: "1em",
            }}
          >
            {`Ver ${process.env?.REACT_APP_VERSION}`}
          </span>
          {`Copyright © ${new Date().getFullYear()}  All rights reserved`}
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default Footer
