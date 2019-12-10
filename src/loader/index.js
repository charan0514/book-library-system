import React from 'react'

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
      <SpinnerContainer>
        <LoadingSpinner />
      </SpinnerContainer>
    )
  }
}

export default Loader;
