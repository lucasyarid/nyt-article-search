import { ImgHTMLAttributes, useState } from 'react'
import { UseImgOnLoadReturn } from './types'

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
