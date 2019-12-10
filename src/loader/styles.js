import styled, { keyframes } from "styled-components"

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  opacity: 0.7;
  ${(props) => (
    props.styles
  )}
`

export const LoadingSpinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  -webkit-animation: ${rotate360} 1s linear infinite;
  border: 5px solid #756969;
  border-radius: 50% !important;
  border-right-color: transparent;
  width: 40px;
  height: 40px;
  display: inline-block;
  ${(props) => (
    props.styles
  )}
`
