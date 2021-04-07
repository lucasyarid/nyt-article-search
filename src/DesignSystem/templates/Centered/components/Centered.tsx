import React, { FC } from 'react'

import { CenteredTemplateProps } from '../types'
import {
  CenteredTemplateContent,
  CenteredTemplateWrapper,
  Wrapper,
} from './styled'

export const CenteredTemplate: FC<CenteredTemplateProps> = ({
  children,
}: CenteredTemplateProps) => (
  <CenteredTemplateWrapper>
    <CenteredTemplateContent>
      <Wrapper>{children}</Wrapper>
    </CenteredTemplateContent>
  </CenteredTemplateWrapper>
)
