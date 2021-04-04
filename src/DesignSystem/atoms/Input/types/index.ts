import { InputHTMLAttributes } from 'react'
import { IconType } from 'react-icons'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  icon?: IconType
}
