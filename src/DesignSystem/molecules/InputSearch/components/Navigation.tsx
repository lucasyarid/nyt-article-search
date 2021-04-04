import React, { FC } from 'react'
import styled from 'styled-components'

import { Icon } from 'DesignSystem/quarks'

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  transform: translateY(8px);
  padding: 0 25px;

  svg {
    width: 45px;
    height: 45px;
    padding: 5px;
    fill: var(--black);
    cursor: pointer;
    border-radius: 50%;
    transition: fill 0.5s, background-color 0.5s;

    &:hover {
      fill: var(--white);
      background-color: var(--light-gray);
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
