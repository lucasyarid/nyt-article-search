import { useState, useCallback } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { returnQueryString } from './returnQueryString'
import { queryStringMap, useQueryStringType } from '../types'

export const useQueryString: useQueryStringType = () => {
  const history = useHistory()
  const location = useLocation()

  const urlParams = new URLSearchParams(location.search)
  const paramsObject = Object.fromEntries(urlParams)

  const [value, setValue] = useState(paramsObject)

  const setUrlParam = (newParams: queryStringMap) => {
    const search = Object.keys(newParams).reduce(returnQueryString(newParams), '')
    history.push({ search })
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
