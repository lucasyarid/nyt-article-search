import React, { FC } from 'react'
import styled from 'styled-components'

import { Icon } from 'DesignSystem/quarks'

import { DialogProps, DialogWrapperProps } from '../types'

const Close = styled(Icon.Cross)`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`

const DialogWrapper = styled.div<DialogWrapperProps>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: var(--drop-background);
  z-index: var(--z-index-modal-bg);
  transition: opacity 0.5s;

  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  pointer-events: ${(props) => (props.isVisible ? 'auto' : 'none')};
`

const DialogBox = styled.div`
  width: 400px;
  min-height: 100px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: var(--z-index-modal);
  text-align: center;
  background-color: var(--white);
  border-radius: var(--border-radius);
`

const DialogDrop = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  width: 100vw;
  height: 100vw;
  background-color: var(--drop-background);
`

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
