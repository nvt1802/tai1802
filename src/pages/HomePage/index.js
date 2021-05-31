import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PageWrapper from 'components/PageWapper'
import { useTranslation } from 'react-i18next'

const HomePage = () => {
  const { t } = useTranslation('home')
  const [isShowControls, setIsShowControls] = useState(false)

  useEffect(() => {
    document.title = t('home:title')
  })

  const arr = [
    'https://firebasestorage.googleapis.com/v0/b/tai1802.appspot.com/o/Video%2Ftiktok%2Ftuziya55555-131.mp4?alt=media&token=bca85c55-771e-4263-a111-218cd9967d7b',
    'https://firebasestorage.googleapis.com/v0/b/tai1802.appspot.com/o/Video%2Ftiktok%2Ftuziya55555-884.mp4?alt=media&token=18a919c4-2390-438a-96d5-a442be377fa1'
  ]

  const handleMouseMove = () => {
    setIsShowControls(true)
  }

  const handleMouseOut = () => {
    setIsShowControls(false)
  }

  return (
    <PageWrapper>
      <div style={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}>
        {arr.map((item, index) => {
          return (
            <video
              key={index}
              width="250"
              height="400"
              controls={isShowControls}
              onMouseMove={handleMouseMove}
              onMouseOut={handleMouseOut}
            >
              <source src={item} type="video/mp4" />
            </video>
          )
        })}
      </div>
    </PageWrapper>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

