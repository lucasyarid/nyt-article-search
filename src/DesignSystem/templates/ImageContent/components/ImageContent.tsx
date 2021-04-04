import styled from 'styled-components'

export const ImageContentTemplate = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 3vw;
  display: grid;
  grid-template-areas: 'left right';
  grid-template-columns: 1fr 1.5fr;
  gap: 150px;
`

export const ImageContentLeft = styled.section`
  grid-area: left;
  align-self: center;
`

export const ImageContentRight = styled.section`
  grid-area: right;
  align-self: end;
`
