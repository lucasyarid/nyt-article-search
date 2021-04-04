import { createGlobalStyle } from 'styled-components'

import { colorVars } from './colors'
import { borderVars } from './border'
import { typographyVars, headings } from './typography'
import { zIndexVars } from './zIndex'

export const GlobalStyles = createGlobalStyle`
  :root {
    ${typographyVars}
    ${colorVars}
    ${borderVars}
    ${zIndexVars}
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
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
