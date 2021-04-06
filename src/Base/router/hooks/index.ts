import { useState, useCallback } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

export const useQueryString = (
  key: string
): [string, (newValue: string) => void] => {
  const history = useHistory()
  const location = useLocation()

  const getQueryParamFromUrl = (key: string) =>
    new URLSearchParams(location.search).get(key)

  const setUrlParam = (paramKey: string, paramValue: string) => {
    const searchParams = new URLSearchParams(location.search)
    searchParams.set(paramKey, paramValue)

    history.push({
      search: searchParams.toString(),
    })
  }

  const [value, setValue] = useState(getQueryParamFromUrl(key) || '')
  const onSetValue = useCallback(
    (newValue) => {
      setValue(newValue)
      setUrlParam(key, newValue)
    },
    [key]
  )

  return [value, onSetValue]
}
