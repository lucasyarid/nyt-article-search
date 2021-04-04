import { renderHook, act } from '@testing-library/react-hooks'

import { useDebounce } from '../useDebounce'

describe('useDebounce', () => {
  it('sets new value', () => {
    const initialValue = 'initial'
    const newValue = 'newValue'
    const newValueEvent = { target: { value: newValue } }
    const mockFn = jest.fn()

    const { result } = renderHook(() =>
      useDebounce({
        initialValue,
        delay: 300,
        onDebounced: mockFn,
      })
    )

    expect(result.current[0]).toBe(initialValue)

    act(() => {
      result.current[1](newValueEvent)
    })

    expect(result.current[0]).toBe(newValue)
  })
})
