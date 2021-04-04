import { NavigationProps } from 'DesignSystem/atoms'

export interface SearchItem {
  title: string
  id: string
}

export interface SearchList {
  resultList: SearchItem[]
  selected: number
  setSelected: (e: number) => void
}

export interface DropdownContentProps extends SearchList, NavigationProps {}
