import React, { FC } from 'react'
import styled from 'styled-components'
import { SearchList } from '../types/Dropdown'
import { Navigation, NavigationProps } from './Navigation'

const StyledDropdownContent = styled.div`
  margin-top: 10px;
  padding: 40px;
  padding-bottom: 60px;
  background-color: var(--white);
  border-radius: 30px 30px;
  box-shadow: var(--drop-shadow);
  z-index: 1;

  h5,
  .dark & h5 {
    color: var(--black);
    padding: 10px 5px;
    margin-bottom: 0;
    &:not(:last-child) {
      border-bottom: 1px solid var(--light-gray);
    }
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
    {resultList.map((listItem, key) => (
      <h5 key={key}>{listItem.title}</h5>
    ))}

    <Navigation
      isFirstPage={isFirstPage}
      isLastPage={isLastPage}
      onClickNext={onClickNext}
      onClickPrevious={onClickPrevious}
    />
  </StyledDropdownContent>
)
