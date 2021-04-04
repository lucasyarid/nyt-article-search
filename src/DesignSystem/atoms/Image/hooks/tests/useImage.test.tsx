import { renderHook, act } from '@testing-library/react-hooks'

import { useImgOnLoad } from '../useImage'

describe('useImgOnLoad', () => {
  it('loads image', () => {
    const { result } = renderHook(() =>
      useImgOnLoad({
        src: '',
      })
    )

    expect(result.current.isLoaded).toBeFalsy()

    act(() => result.current.loadImg())
    act(() => {
      if (result.current.image.onload) result.current.image.onload({} as Event)
    })

    expect(result.current.isLoaded).toBeTruthy()
  })

  it('shows error', () => {
    const { result } = renderHook(() =>
      useImgOnLoad({
        src: '',
      })
    )

    expect(result.current.hasError).toBeFalsy()

    act(() => result.current.loadImg())
    act(() => {
      if (result.current.image.onerror)
        result.current.image.onerror({} as Event)
    })

    expect(result.current.hasError).toBeTruthy()
  })
})
