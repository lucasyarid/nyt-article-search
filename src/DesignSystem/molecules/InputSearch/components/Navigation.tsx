import React, { FC } from 'react'
import styled from 'styled-components'

import Icon from 'DesignSystem/quarks/Icon'

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  transform: translateY(25px);

  svg {
    width: 25px;
    height: 25px;
    fill: var(--black);
    cursor: pointer;
    transition: fill 0.5s;

    &:hover {
      fill: var(--gray);
    }
  }
`

export interface NavigationProps {
  isFirstPage: boolean
  isLastPage: boolean
  onClickNext?: () => void
  onClickPrevious?: () => void
}

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
    {!isLastPage && (
      <Icon.ArrowRight aria-label="Next Page" onClick={onClickNext} />
    )}
  </NavigationWrapper>
)
