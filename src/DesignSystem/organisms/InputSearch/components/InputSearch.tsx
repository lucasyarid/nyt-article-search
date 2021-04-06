import React, { FC, KeyboardEvent } from 'react'
import styled from 'styled-components'

import { Icon } from 'DesignSystem/quarks'
import { Input, InputProps, NavigationProps } from 'DesignSystem/atoms'
import { DropdownContent, SearchList } from 'DesignSystem/molecules'

import { useDebounce } from '../hooks/useDebounce'

const InputSearchWrapper = styled.div`
  position: relative;
`

interface InputSearchProps
  extends Omit<InputProps, 'onMouseOver' | 'onClick'>,
    NavigationProps,
    SearchList {
  isLoading?: boolean
  delay: number
  value: string
  onDebounced: (e: string) => void
  onEnter: () => void
}

export const InputSearch: FC<InputSearchProps> = ({
  onDebounced,
  delay,
  isLoading,
  resultList,
  isFirstPage,
  isLastPage,
  onEnter,
  onClick,
  onClickNext,
  onClickPrevious,
  value,
  selected,
  setSelected,
  ...props
}: InputSearchProps) => {
  const [newValue, handleInputChange] = useDebounce({
    initialValue: value,
    delay,
    onDebounced,
  })

  const icon = isLoading ? Icon.Loading : Icon.MagnifyingGlass

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (selected + 1 < resultList.length) setSelected(selected + 1)
      else setSelected(0)
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (selected - 1 >= 0) setSelected(selected - 1)
      else setSelected(resultList.length - 1)
    }
    if (e.key === 'Enter') onEnter()
  }

  return (
    <InputSearchWrapper>
      <Input
        icon={icon}
        value={newValue}
        onKeyDown={onKeyDown}
        onChange={handleInputChange}
        autoComplete="off"
        {...props}
      />
      {resultList.length ? (
        <DropdownContent
          resultList={resultList}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          onClickNext={onClickNext}
          onClickPrevious={onClickPrevious}
          selected={selected}
          setSelected={setSelected}
          onClick={onClick}
        />
      ) : null}
    </InputSearchWrapper>
  )
}
