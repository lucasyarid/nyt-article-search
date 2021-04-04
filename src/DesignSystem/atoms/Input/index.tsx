import React, { FC, InputHTMLAttributes } from 'react'
import { IconType } from 'react-icons'
import styled from 'styled-components'

const InputWrapper = styled.div`
  position: relative;
`

const StyledLabel = styled.label`
  display: block;
  margin-left: 20px;
  margin-bottom: 10px;
`

const StyledInput = styled.input`
  font-size: 1.3rem;
  font-family: var(--body);
  line-height: 30px;

  width: 100%;
  padding: 15px 30px;
  padding-right: 60px;

  border-radius: 30px;
  border: none;
  box-shadow: var(--drop-shadow);

  background-color: var(--white);
  &:focus {
    outline: none;
  }
`

const StyledIcon = styled.svg`
  width: 30px;
  height: 30px;

  position: absolute;
  top: 47%;
  right: 20px;

  fill: var(--gray);
`

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  icon?: IconType
}

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
