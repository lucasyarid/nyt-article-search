import React, { FC } from 'react'
import styled from 'styled-components'

import { Icon } from 'DesignSystem/quarks'
import { NavigationProps } from '../types'

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  svg {
    width: 45px;
    height: 45px;
    padding: 10px;
    fill: var(--black);
    cursor: pointer;
    border-radius: 50%;
    transition: fill 0.5s, background-color 0.5s;
    background-color: var(--white);
    box-shadow: var(--drop-shadow);

    &:hover {
      background-color: var(--light-gray);
    }
  }
`

const ArrowRight = styled(Icon.ArrowRight)`
  display: block;
  margin-left: auto;
`

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
