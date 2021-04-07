import styled from 'styled-components'

export const CenteredTemplateContent = styled.div`
  z-index: var(--z-index-layout);
`

export const CenteredTemplateWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-content: center;
  overflow: hidden;
  position: relative;
  padding-top: 5vh;
`

export const Wrapper = styled.div`
  width: 100vw;
  padding: 0 20px;

  @media screen and (min-width: 750px) {
    width: 750px;
  }
`
