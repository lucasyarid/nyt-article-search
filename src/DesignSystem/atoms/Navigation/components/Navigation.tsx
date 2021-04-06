import React, { FC } from 'react'

import { Icon } from 'DesignSystem/quarks'
import { NavigationProps } from '../types'
import { ArrowRight, NavigationWrapper } from './styled'

export const Navigation: FC<NavigationProps> = ({
  isFirstPage,
  isLastPage,
  onClickNext,
  onClickPrevious,
}: NavigationProps) => (
  <NavigationWrapper>
    {!isFirstPage && (
      <Icon.ArrowLeft aria-label="Previous Page" onClick={onClickPrevious} />
    )}
    {!isLastPage && <ArrowRight aria-label="Next Page" onClick={onClickNext} />}
  </NavigationWrapper>
)
