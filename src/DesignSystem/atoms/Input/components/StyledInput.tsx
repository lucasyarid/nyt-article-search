import styled from 'styled-components'

export const InputWrapper = styled.div`
  position: relative;
`

export const StyledLabel = styled.label`
  display: block;
  margin-left: 20px;
  margin-bottom: 10px;
`

export const StyledInput = styled.input`
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

export const StyledIcon = styled.svg`
  width: 30px;
  height: 30px;

  position: absolute;
  top: 47%;
  right: 20px;

  fill: var(--gray);
`
