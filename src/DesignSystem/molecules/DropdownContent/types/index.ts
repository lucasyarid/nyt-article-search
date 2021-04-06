export interface ResultListItem {
  url: string
  label: string
}

export interface SearchList {
  resultList: ResultListItem[]
  selected: number
  setSelected: (e: number) => void
}
