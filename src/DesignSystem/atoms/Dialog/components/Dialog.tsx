import React, { FC } from 'react'
import { Close, DialogBox, DialogDrop, DialogWrapper } from './styled'

import { DialogProps } from '../types'

export const Dialog: FC<DialogProps> = ({
  isVisible,
  title,
  content,
  onClose,
}: DialogProps) => {
  return (
    <DialogWrapper isVisible={isVisible}>
      <DialogBox>
        <Close onClick={onClose} aria-label="Close" />
        <h4>{title}</h4>
        <p>{content}</p>
      </DialogBox>
      <DialogDrop onClick={onClose} />
    </DialogWrapper>
  )
}
