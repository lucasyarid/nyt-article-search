import { createGlobalStyle } from 'styled-components'

import { colorVars } from './colors'
import { typographyVars, headings } from './typography'

export const GlobalStyles = createGlobalStyle`
  :root {
    ${colorVars}
    ${typographyVars}
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ${headings}

  .App {
    background-color: var(--white);
    color: var(--black);

    &.dark {
      background-color: var(--dark);
      color: var(--white);
    }
  }
`
