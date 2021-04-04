import React, { FC } from 'react'

import { InputProps } from '../types/InputProps'

import {
  InputWrapper,
  StyledLabel,
  StyledInput,
  StyledIcon,
} from './StyledInput'

export const Input: FC<InputProps> = ({
  name,
  label,
  icon,
  ...props
}: InputProps) => {
  return (
    <InputWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput id={name} {...props} />
      {icon && <StyledIcon as={icon} />}
    </InputWrapper>
  )
}
