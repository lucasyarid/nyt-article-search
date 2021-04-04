import React, { FC } from 'react'
import styled from 'styled-components'

import { Input, InputProps } from 'DesignSystem/atoms'
import { Icon } from 'DesignSystem/quarks'

import { useDebounce } from '../hooks/useDebounce'
import { DropdownContent } from './DropdownContent'
import { SearchItem } from '../types/Dropdown'
import { NavigationProps } from './Navigation'

const InputSearchWrapper = styled.div`
  position: relative;
`

interface InputSearchProps extends InputProps, NavigationProps {
  isLoading?: boolean
  delay: number
  value: string
  resultList: SearchItem[]
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
  ...props
}: InputSearchProps) => {
  const [newValue, handleInputChange] = useDebounce({
    initialValue: value,
    delay,
    onDebounced,
  })

  const icon = isLoading ? Icon.Loading : Icon.MagnifyingGlass

  return (
    <InputSearchWrapper>
      <Input
        icon={icon}
        value={newValue}
        onChange={handleInputChange}
        {...props}
      />
      <DropdownContent
        resultList={resultList}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        onClickNext={onClickNext}
        onClickPrevious={onClickPrevious}
      />
    </InputSearchWrapper>
  )
}
