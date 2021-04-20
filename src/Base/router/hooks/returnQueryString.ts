import { returnQueryStringType } from '../types'

export const returnQueryString: returnQueryStringType = (queryValues) => (previousQueryParams, queryKey, index, array) => {
  const hasSeparator = (index + 1) !== array.length
  return `${previousQueryParams}${queryKey}=${queryValues[queryKey]}${hasSeparator ? '&' : ''}`
}
