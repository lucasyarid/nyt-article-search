import { InputProps } from 'DesignSystem/atoms'
import { ResultListItem } from 'DesignSystem/molecules'

export interface InputSearchProps extends InputProps {
  resultList: ResultListItem[]
  isLoading?: boolean
  delay: number
  value: string
  onDebounced: (e: string) => void
}

export interface useDebounceParams {
  initialValue: string
  delay: number
  onDebounced: (e: string) => void
}

export type useDebounceReturn = [string, (event: unknown) => () => void]
