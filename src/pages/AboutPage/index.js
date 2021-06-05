import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"
import PageWrapper from "components/PageWapper"

const AboutPage = () => {
  const { t } = useTranslation("404")

  useEffect(() => {
    document.title = t("about:title")
  })

  return <PageWrapper></PageWrapper>
}

export default AboutPage
