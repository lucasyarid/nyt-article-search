import styled from 'styled-components'

import { AiOutlineLoading } from 'react-icons/ai'

export const RotatingLoading = styled(AiOutlineLoading)`
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  animation: spin 1s ease-in-out infinite;
`
