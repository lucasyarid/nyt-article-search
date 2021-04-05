import { css } from 'styled-components'

export const typographyVars = css`
  --heading: 'Abril Fatface', cursive;
  --body: 'Average', serif;
`

export const headings = css`
  html,
  p {
    font-family: var(--body);
    font-size: 16px;
    letter-spacing: 1px;
    color: var(--black);
    margin-bottom: 10px;

    .dark & {
      color: var(--white);
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--black);
    font-family: var(--heading);
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 16px;

    .dark & {
      color: var(--white);
    }
  }
  h1 {
    font-size: 3.7rem;
    line-height: 4rem;
    margin-top: 10px;
  }
  h2 {
    font-size: 3rem;
    line-height: 3rem;
  }
  h3 {
    font-size: 2.5rem;
    line-height: 2rem;
  }
  h4 {
    font-size: 2rem;
    line-height: 2rem;
  }
  h5 {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
  h6 {
    font-size: 1rem;
    line-height: 1rem;
  }

  a {
    color: var(--dark);
    text-decoration: none;
    margin: 10px 0;
  }

  time {
    font-weight: 900;
    color: var(--dark);
    margin-bottom: 50px;
    display: block;
  }
`
