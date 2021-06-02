import React, { useEffect } from "react"
import { connect } from "react-redux"
import PageWrapper from "components/PageWapper"
import { useTranslation } from "react-i18next"
import ChatBox from "components/ChatBox"

const HomePage = (props) => {
  const { user } = props
  const { t } = useTranslation("home")

  useEffect(() => {
    document.title = t("home:title")
  })

  return (
    <PageWrapper>
      <ChatBox user={user} />
    </PageWrapper>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
