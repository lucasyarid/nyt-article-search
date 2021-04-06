import { MouseEventHandler } from 'react'

export interface SearchList {
  resultList: string[]
  selected: number
  setSelected: (e: number) => void
  onClick: MouseEventHandler<HTMLLIElement>
}
