export interface DialogProps {
  isVisible: boolean
  title: string
  content: string
  onClose: () => void
}

export interface DialogWrapperProps {
  readonly isVisible: boolean
}
