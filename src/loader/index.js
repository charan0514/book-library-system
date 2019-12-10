import React from 'react'
//import Modal from '../../Widgets/Modal'

import {
  SpinnerContainer,
  LoadingSpinner
} from './styles'


class Loader extends React.Component {

  renderLoader = () => (
    <SpinnerContainer>
      <LoadingSpinner />
    </SpinnerContainer>
  )

  render () {
    return (
      // <Modal>
      // { this.renderLoader() }
      // </Modal>
      <SpinnerContainer>
        <LoadingSpinner />
      </SpinnerContainer>
    )
  }
}

export default Loader;
