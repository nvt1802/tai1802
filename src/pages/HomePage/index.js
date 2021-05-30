import React from 'react'
import { connect } from 'react-redux'
import PageWrapper from 'components/PageWapper'
import BackgroundImage from 'assets/image/bgHome/bg-home-1.jpg'

export const HomePage = () => {
  return (
    <PageWrapper backgroundImage={BackgroundImage}>
      Hello
    </PageWrapper>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
