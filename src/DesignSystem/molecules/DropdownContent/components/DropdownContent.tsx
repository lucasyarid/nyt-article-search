import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { SearchList } from '../types'
import { StyledDropdownContent, StyledList } from './styled'

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
