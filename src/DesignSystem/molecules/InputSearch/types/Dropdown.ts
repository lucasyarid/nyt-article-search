export interface SearchItem {
  title: string
  id: string
}

export interface SearchList {
  resultList: SearchItem[]
  selected: number
  setSelected: (e: number) => void
}
