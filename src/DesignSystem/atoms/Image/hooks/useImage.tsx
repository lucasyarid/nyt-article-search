import { ImgHTMLAttributes, useState } from 'react'

export interface UseImgOnLoadReturn {
  image: HTMLImageElement
  isLoaded: boolean
  hasError: boolean
  loadImg: () => void
}

export const useImgOnLoad = ({
  src,
}: ImgHTMLAttributes<HTMLImageElement>): UseImgOnLoadReturn => {
  const [image, setImage] = useState<HTMLImageElement>(new Image())
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const loadImg = () => {
    const loadedImage = new Image()
    if (src) loadedImage.src = src

    setImage(loadedImage)
    loadedImage.onload = () => setIsLoaded(true)
    loadedImage.onerror = () => setHasError(true)
  }

  return { image, isLoaded, loadImg, hasError }
}
