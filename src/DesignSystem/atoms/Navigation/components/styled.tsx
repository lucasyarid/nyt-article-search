import styled from 'styled-components'

import { Icon } from 'DesignSystem/quarks'

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  svg {
    width: 45px;
    height: 45px;
    padding: 10px;
    fill: var(--black);
    cursor: pointer;
    border-radius: 50%;
    transition: fill 0.5s, background-color 0.5s;
    background-color: var(--white);
    box-shadow: var(--drop-shadow);

    &:hover {
      background-color: var(--light-gray);
    }
  }
`

export const ArrowRight = styled(Icon.ArrowRight)`
  display: block;
  margin-left: auto;
`
