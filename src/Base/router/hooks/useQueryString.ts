import { useState, useCallback } from 'react'

import { queryStringMap, useQueryStringType } from '../types'

export const useQueryString: useQueryStringType = () => {

  const urlParams = new URLSearchParams(window.location.search)
  const paramsObject = Object.fromEntries(urlParams)

  const [value, setValue] = useState(paramsObject)

  const setUrlParam = (newParams: queryStringMap) => {
    const params = new URLSearchParams(newParams).toString()
    window.history.pushState('', '', `?${params}`)
  }

  const onSetValue = useCallback(
    (newParams) => {
      setValue(newParams)
      setUrlParam(newParams)
    },
    [urlParams]
  )

  return [value, onSetValue]
}
