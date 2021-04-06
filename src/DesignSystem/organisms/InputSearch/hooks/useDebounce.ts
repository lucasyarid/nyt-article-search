import { useState, useCallback } from 'react'
import { useDebounceParams, useDebounceReturn } from '../types'

export const useDebounce = ({
  initialValue,
  delay,
  onDebounced,
}: useDebounceParams): useDebounceReturn => {
  const [value, setValue] = useState(initialValue)
  const [timer, setTimer] = useState(0)

  const handleInputChange = useCallback(
    (event) => {
      const inputVal = event.target.value
      setValue(inputVal)

      if (timer) window.clearTimeout(timer)

      const timerId = window.setTimeout(() => onDebounced(inputVal), delay)
      setTimer(timerId)

      return () => {
        if (timer) window.clearTimeout(timer)
      }
    },
    [onDebounced, delay, timer]
  )

  return [value, handleInputChange]
}
