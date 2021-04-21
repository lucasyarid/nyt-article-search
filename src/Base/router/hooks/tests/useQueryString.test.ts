import { renderHook, act } from '@testing-library/react-hooks'

import { useQueryString } from '../useQueryString'

describe('useQueryString', () => {
  it('should return url params', () => {
    window.history.pushState('', '', '?q=elections&page=0')
    const { result } = renderHook(() =>
      useQueryString()
    )

    expect(result.current[0]).toStrictEqual({ q: 'elections', page: '0' })
  })

  it('should update url param page', () => {
    const { result } = renderHook(() =>
      useQueryString()
    )

    act(() => result.current[1]({ q: 'elections', page: '1' }))
    expect(result.current[0]).toStrictEqual({ q: 'elections', page: '1' })
  })

  it('should remove url param page and keep query', () => {
    const { result } = renderHook(() =>
      useQueryString()
    )

    act(() => result.current[1]({ q: 'elections' }))
    expect(result.current[0]).toStrictEqual({ q: 'elections' })
  })
})
