import React, { FC, useEffect, ImgHTMLAttributes } from 'react'

import DefaultThumbnail from '../assets/default-thumbnail.jpg'
import { useImgOnLoad } from '../hooks/useImage'

export const Image: FC<ImgHTMLAttributes<HTMLImageElement>> = ({
  src,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) => {
  const { loadImg, hasError, isLoaded } = useImgOnLoad({ src })

  const imageSrc = hasError || !isLoaded ? DefaultThumbnail : src

  useEffect(() => {
    loadImg()
  }, [])

  return <img src={imageSrc} {...props} />
}
