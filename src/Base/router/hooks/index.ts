// import { ImgHTMLAttributes, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

export const useUrlQuery = () => {
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

  return { getQueryParamFromUrl, setUrlParam }
}