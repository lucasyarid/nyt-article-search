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
  extends Omit<InputProps, 'onMouseOver'>,
    NavigationProps,
    SearchList {
  isLoading?: boolean
  delay: number
  value: string
  onDebounced: (e: string) => void
}

export const InputSearch: FC<InputSearchProps> = ({
  onDebounced,
  delay,
  isLoading,
  resultList,
  isFirstPage,
  isLastPage,
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

  const onKeyDown = ({ key }: KeyboardEvent<HTMLDivElement>) => {
    if (key === 'ArrowDown') {
      if (selected + 1 < resultList.length) setSelected(selected + 1)
      else setSelected(0)
    }
    if (key === 'ArrowUp') {
      if (selected - 1 >= 0) setSelected(selected - 1)
      else setSelected(resultList.length - 1)
    }
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
      <DropdownContent
        resultList={resultList}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        onClickNext={onClickNext}
        onClickPrevious={onClickPrevious}
        selected={selected}
        setSelected={setSelected}
      />
    </InputSearchWrapper>
  )
}
