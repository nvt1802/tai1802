import React, { useEffect } from "react"
import { connect } from "react-redux"
import PageWrapper from "components/PageWapper"
import { useTranslation } from "react-i18next"

const HomePage = (props) => {
  const { t } = useTranslation("home")

  useEffect(() => {
    document.title = t("home:title")
  })

  return <PageWrapper></PageWrapper>
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
