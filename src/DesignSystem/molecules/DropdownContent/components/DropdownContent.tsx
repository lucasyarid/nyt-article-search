import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { SearchList } from '../types'

const StyledDropdownContent = styled.div`
  margin-top: 10px;
  padding-bottom: 30px;
  background-color: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--drop-shadow);
  z-index: var(--z-index-dropdown);
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

  & h6 {
    margin: 0;
    padding: 15px 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    .dark & {
      color: var(--black);
    }
  }
`

export const DropdownContent: FC<SearchList> = ({
  selected,
  setSelected,
  resultList,
}: SearchList) => {
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
            <Link to={listItem.url}>
              <h6>{listItem.label}</h6>
            </Link>
          </StyledList>
        ))}
      </ul>
    </StyledDropdownContent>
  )
}
