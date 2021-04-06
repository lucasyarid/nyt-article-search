import React, { FC } from 'react'

import { CenteredTemplateProps } from '../types'
import {
  CenteredTemplateBackground,
  CenteredTemplateContent,
  CenteredTemplateWrapper,
  Wrapper,
} from './styled'

export const CenteredTemplate: FC<CenteredTemplateProps> = ({
  backgroundSrc,
  children,
}: CenteredTemplateProps) => (
  <CenteredTemplateWrapper>
    <CenteredTemplateBackground backgroundSrc={backgroundSrc} />
    <CenteredTemplateContent>
      <Wrapper>{children}</Wrapper>
    </CenteredTemplateContent>
  </CenteredTemplateWrapper>
)
