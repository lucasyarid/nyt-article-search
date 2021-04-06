import styled from 'styled-components'

export const StyledDropdownContent = styled.div`
  margin-top: 10px;
  background-color: var(--white);
  border-radius: var(--border-radius-wrapper);
  box-shadow: var(--drop-shadow);
  z-index: var(--z-index-dropdown);
  overflow: hidden;
`

export const StyledList = styled.li`
  cursor: pointer;
  color: var(--black);
  border-radius: var(--border-radius);
  transition: background-color 0.5s, border-radius 0.5s;

  background-color: ${(props) =>
    props['aria-selected'] ? 'var(--light-gray)' : 'var(--white)'};

  &:hover,
  &.selected {
    background-color: var(--light-gray);
  }

  & h6 {
    margin: 0;
    padding: 15px 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    .dark & {
      color: var(--black);
    }
  }
`
