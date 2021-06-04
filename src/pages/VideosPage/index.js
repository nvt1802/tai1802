import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import PageWrapper from "components/PageWapper"
import { useTranslation } from "react-i18next"
import {
  makeStyles,
  Paper,
  AppBar,
  Tab,
  Tabs,
  Typography,
  Box,
} from "@material-ui/core"
import {
  YouTube as YouTubeIcon,
  VideoLibrary as VideoIcon,
} from "@material-ui/icons"
import Youtube from "components/Video/Youtube"

const VideosPage = (props) => {
  const { t } = useTranslation("videos")
  const classes = useStyles()
  const [value, setValue] = useState(0)

  useEffect(() => {
    document.title = t("videos:title")
  })

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <PageWrapper>
      <Paper className={classes.page}>
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
            <Tab label={"Youtube"} icon={<YouTubeIcon />} />
            <Tab label={"Other"} icon={<VideoIcon />} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Youtube />
        </TabPanel>
        <TabPanel value={value} index={1}></TabPanel>
      </Paper>
    </PageWrapper>
  )
}

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

const useStyles = makeStyles(() => ({
  page: {
    width: "85%",
    margin: "auto",
  },
}))

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(VideosPage)
