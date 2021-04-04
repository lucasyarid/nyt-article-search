import React, { FC } from 'react'
import styled from 'styled-components'

import { Navigation } from 'DesignSystem/atoms'

import { DropdownContentProps } from '../types'

const StyledDropdownContent = styled.div`
  margin-top: 10px;
  padding-bottom: 30px;
  background-color: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--drop-shadow);
  z-index: 1;
  overflow: hidden;
`

const StyledList = styled.li`
  cursor: pointer;
  color: var(--black);
  border-radius: var(--border-radius);
  transition: background-color 0.5s, border-radius 0.5s;

  background-color: ${(props) =>
    props['aria-selected'] ? 'var(--light-gray)' : 'var(--white)'};

  &:hover,
  &.selected {
    background-color: var(--light-gray);
  }

  & h5 {
    margin: 0;
    padding: 15px 30px;
    .dark & {
      color: var(--black);
    }
  }
`

export const DropdownContent: FC<DropdownContentProps> = ({
  selected,
  setSelected,
  resultList,
  isFirstPage,
  isLastPage,
  onClickNext,
  onClickPrevious,
}: DropdownContentProps) => {
  const handleOnMouseOver = (key: number) => () => setSelected(key)

  return (
    <StyledDropdownContent>
      <ul role="tablist">
        {resultList.map((listItem, key) => (
          <StyledList
            role="tab"
            key={key}
            aria-selected={selected === key}
            onMouseOver={handleOnMouseOver(key)}
          >
            <h5>{listItem}</h5>
          </StyledList>
        ))}
      </ul>

      <Navigation
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        onClickNext={onClickNext}
        onClickPrevious={onClickPrevious}
      />
    </StyledDropdownContent>
  )
}
