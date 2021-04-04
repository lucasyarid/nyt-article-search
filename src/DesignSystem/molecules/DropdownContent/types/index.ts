import { NavigationProps } from 'DesignSystem/atoms'

export interface SearchList {
  resultList: string[]
  selected: number
  setSelected: (e: number) => void
}

export interface DropdownContentProps extends SearchList, NavigationProps {}
