import React, { Fragment, useState } from "react"
import { AppBar, Tab, Tabs, Typography, Box } from "@material-ui/core"
import {
  ImageOutlined,
  LanguageOutlined as LanguageIcon,
} from "@material-ui/icons"
import { useTranslation } from "react-i18next"
import SetingLanguageForm from "components/Language/Form"
import SettingsBackGroundLogin from "components/Settings/SettingsBackGroundLogin"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

export default function SettingsTabs() {
  const [value, setValue] = useState(0)

  const { t } = useTranslation(["common", "settings"])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <AppBar position="relative" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab
            label={t("settings:title_setting_background")}
            icon={<ImageOutlined />}
          />
          <Tab
            label={t("settings:title_setting_language")}
            icon={<LanguageIcon />}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <SettingsBackGroundLogin />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SetingLanguageForm />
      </TabPanel>
    </>
  )
}
