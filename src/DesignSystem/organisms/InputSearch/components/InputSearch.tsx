import React, { FC, useState, KeyboardEvent } from 'react'
import styled from 'styled-components'

import { Icon } from 'DesignSystem/quarks'
import { Input, InputProps } from 'DesignSystem/atoms'
import { DropdownContent } from 'DesignSystem/molecules'

import { useDebounce } from '../hooks/useDebounce'
import { ResultListItem } from 'DesignSystem/molecules/DropdownContent'
import { useHistory } from 'react-router-dom'

const InputSearchWrapper = styled.div`
  position: relative;
`

interface InputSearchProps extends InputProps {
  resultList: ResultListItem[]
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
  value,
  ...props
}: InputSearchProps) => {
  const history = useHistory()

  const [selected, setSelected] = useState(0)
  const [newValue, handleInputChange] = useDebounce({
    initialValue: value,
    delay,
    onDebounced,
  })

  const icon = isLoading ? Icon.Loading : Icon.MagnifyingGlass

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') history.push(resultList[selected].url)

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelected((prevState) =>
        prevState + 1 < resultList.length ? prevState + 1 : 0
      )
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()

      setSelected((prevState) =>
        prevState - 1 >= 0 ? prevState - 1 : resultList.length - 1
      )
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
      {resultList.length ? (
        <DropdownContent
          resultList={resultList}
          selected={selected}
          setSelected={setSelected}
        />
      ) : null}
    </InputSearchWrapper>
  )
}
