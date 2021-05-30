import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PageWrapper from 'components/PageWapper'
import { useTranslation } from 'react-i18next'
import SettingsTabs from 'components/SettingsTabs'
import { makeStyles, Paper } from '@material-ui/core'

const SettinsPage = () => {
  const { t } = useTranslation('settings')
  const classes = useStyles()

  useEffect(() => {
    document.title = t('settings:title')
  })

  return (
    <PageWrapper>
      <Paper className={classes.page}>
        <SettingsTabs />
      </Paper>
    </PageWrapper>
  )
}

const useStyles = makeStyles(() => ({
  page: {
    width: '85%',
    margin: 'auto'
  }
}))

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SettinsPage)
