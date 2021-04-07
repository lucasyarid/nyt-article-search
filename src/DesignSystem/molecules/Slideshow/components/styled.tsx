import styled, { keyframes } from 'styled-components'

import { Image } from 'DesignSystem/atoms'
import { SlideshowImageProps } from '../types'

const fade = keyframes`
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`

export const SlideshowWrapper = styled.ul`
  pointer-events: none;
  background-color: var(--black);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 0;
`

export const SlideshowImage = styled(Image)<SlideshowImageProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  opacity: 0;
  z-index: 0;
  animation: ${fade} 22s linear infinite 0s;
  filter: blur(7px) grayscale(1) sepia(0.2);
  transform: scale(1.1);

  animation-delay: ${({ index }) => Number(index) * 10}s;
`
