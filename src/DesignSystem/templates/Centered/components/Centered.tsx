import React, { FC } from 'react'
import styled from 'styled-components'

import { CenteredTemplateProps } from '../types'

export const CenteredTemplateContent = styled.div`
  z-index: var(--z-index-layout);
`

export const CenteredTemplateWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;
  overflow: hidden;
  position: relative;
`

export const CenteredTemplateBackground = styled.div<CenteredTemplateProps>`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  background-image: url(${({ backgroundSrc }) => backgroundSrc});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  filter: blur(8px);
  transform: scale(1.1);
`

export const CenteredTemplate: FC<CenteredTemplateProps> = ({
  backgroundSrc,
  children,
}: CenteredTemplateProps) => (
  <CenteredTemplateWrapper>
    <CenteredTemplateBackground backgroundSrc={backgroundSrc} />
    <CenteredTemplateContent>{children}</CenteredTemplateContent>
  </CenteredTemplateWrapper>
)
