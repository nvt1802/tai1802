import React, { useEffect } from "react"
import { connect } from "react-redux"
import PageWrapper from "components/PageWapper"
import { useTranslation } from "react-i18next"
// import { data } from "model/data"
// import ReactPlayer from "react-player/lazy"
// import LazyLoad from "react-lazyload"
// import { CircularProgress, Paper } from "@material-ui/core"

const HomePage = (props) => {
  const { t } = useTranslation("home")

  useEffect(() => {
    document.title = t("home:title")
  })

  useEffect(() => {})

  return (
    <PageWrapper>
      {/* <Paper style={{ height: "100vh", overflowY: "auto" }}>
        {data.map((item, index) => {
          return (
            <LazyLoad key={index} placeholder={<CircularProgress />}>
              <ReactPlayer url={item.url} light={true} />
            </LazyLoad>
          )
        })}
      </Paper> */}
    </PageWrapper>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
