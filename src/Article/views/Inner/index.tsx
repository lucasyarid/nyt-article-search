import React, { FC } from 'react'

import {
  ImageContentTemplate,
  ImageContentLeft,
  ImageContentRight,
} from 'DesignSystem/templates'
import { Image } from 'DesignSystem/atoms'

export const InnerView: FC = () => {
  const date = new Date('2021-04-03T13:00:07+0000')
  const formatDate = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
  }).format(date)

  return (
    <ImageContentTemplate>
      <ImageContentLeft>
        <h1>
          A Visceral and Fabulist Short Story Collection Filled With Roots,
          Inheritance and Blood
        </h1>
        <time>{formatDate}</time>
        <p>
          Carribean Fragoza’s new collection, “Eat the Mouth That Feeds You,”
          moves between horror and the real.
        </p>
      </ImageContentLeft>
      <ImageContentRight>
        <Image src="https://www.nytimes.com/images/2021/02/19/books/review/Fajardo-Anstine2/Fajardo-Anstine2-videoSixteenByNine3000.jpg" />
      </ImageContentRight>
    </ImageContentTemplate>
  )
}
