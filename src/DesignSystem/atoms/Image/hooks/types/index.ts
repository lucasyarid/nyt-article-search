export interface UseImgOnLoadReturn {
  image: HTMLImageElement
  isLoaded: boolean
  hasError: boolean
  loadImg: () => void
}
