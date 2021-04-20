export interface queryStringMap {
  [key: string]: string
}

export type returnQueryStringType = (queryValues: queryStringMap) => (
  previousQueryParams: string,
  queryKey: string,
  index: number,
  array: string[]
) => string

export type useQueryStringType = () => [queryStringMap, (newValue: queryStringMap) => void]