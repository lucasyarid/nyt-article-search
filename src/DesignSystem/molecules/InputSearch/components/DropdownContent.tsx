import React, { FC } from 'react'
import styled from 'styled-components'
import { SearchList } from '../types/Dropdown'
import { Navigation, NavigationProps } from './Navigation'

const StyledDropdownContent = styled.div`
  margin-top: 10px;
  padding-bottom: 30px;
  background-color: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--drop-shadow);
  z-index: 1;
  overflow: hidden;
`

const StyledTitle = styled.h5`
  .dark & {
    color: var(--black);
  }

  margin: 0;
  padding: 15px 30px;
  color: var(--black);
  background-color: var(--white);
  transition: background-color 0.5s, border-radius 0.5s;

  &:hover {
    background-color: var(--light-gray);
    border-radius: var(--border-radius);
  }
`

interface DropdownContentProps extends SearchList, NavigationProps {}

export const DropdownContent: FC<DropdownContentProps> = ({
  resultList,
  isFirstPage,
  isLastPage,
  onClickNext,
  onClickPrevious,
}: DropdownContentProps) => (
  <StyledDropdownContent>
    <div>
      {resultList.map((listItem, key) => (
        <StyledTitle key={key}>{listItem.title}</StyledTitle>
      ))}
    </div>

    <Navigation
      isFirstPage={isFirstPage}
      isLastPage={isLastPage}
      onClickNext={onClickNext}
      onClickPrevious={onClickPrevious}
    />
  </StyledDropdownContent>
)
