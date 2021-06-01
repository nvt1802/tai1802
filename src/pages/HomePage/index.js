import React, { useEffect } from "react"
import { connect } from "react-redux"
import PageWrapper from "components/PageWapper"
import { useTranslation } from "react-i18next"
import Video from "components/Video"
import { makeStyles } from "@material-ui/core"
import { source } from "pages/HomePage/source"
import clsx from "clsx"

const HomePage = () => {
  const { t } = useTranslation("home")
  const classes = useStyles()

  useEffect(() => {
    document.title = t("home:title")
  })

  return (
    <PageWrapper>
      <div className={classes.row}>
        {source.map((item, index) => {
          return (
            <div
              className={clsx(classes.colSize3, classes.mb1, classes.mr1)}
              key={index}
            >
              <Video src={item.src} />
            </div>
          )
        })}
      </div>
    </PageWrapper>
  )
}

const useStyles = makeStyles(() => ({
  row: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  colSize: {
    // flex: "0 0 24%",
    // maxWidth: "24%",
    "@media(minWidth: 576px)": {
      flex: "0 0 100%",
      maxWidth: "100%",
    },
    "@media(minWidth: 768px)": {
      flex: "0 0 48%",
      maxWidth: "48%",
    },
    "@media(minWidth: 992px)": {
      flex: "0 0 33%",
      maxWidth: "33%",
    },
    "@media(minWidth: 1200px)": {
      flex: "0 0 24%",
      maxWidth: "24%",
    },
  },
  mb1: {
    marginBottom: "1em",
  },
  mr1: {
    marginLeft: "1em",
  },
}))

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
