import React, { FC } from 'react'
import { SlideshowProps } from '../types'

import { SlideshowWrapper, SlideshowImage } from './styled'

export const Slideshow: FC<SlideshowProps> = ({ list }: SlideshowProps) => {
  return (
    <SlideshowWrapper>
      {list.map((image, key) => (
        <li key={key}>
          <SlideshowImage src={image} index={key} />
        </li>
      ))}
    </SlideshowWrapper>
  )
}
