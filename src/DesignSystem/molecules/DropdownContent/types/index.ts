import { MouseEventHandler } from 'react'
import { NavigationProps } from 'DesignSystem/atoms'

export interface SearchList {
  resultList: string[]
  selected: number
  setSelected: (e: number) => void
  onClick: MouseEventHandler<HTMLLIElement>
}

export interface DropdownContentProps extends SearchList, NavigationProps {}
