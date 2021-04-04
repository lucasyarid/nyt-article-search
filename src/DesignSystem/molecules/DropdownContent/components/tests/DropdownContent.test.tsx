import React from 'react'
import { screen, render } from '@testing-library/react'
import { axe } from 'jest-axe'

import { DropdownContent } from '../DropdownContent'

describe('DropdownContent', () => {
  const resultList = ['title 1', 'title 2', 'title 3']
  const props = {
    resultList,
    selected: 0,
    setSelected: jest.fn(),
    isFirstPage: false,
    isLastPage: false,
    onClickNext: jest.fn(),
    onClickPrevious: jest.fn(),
  }

  it('renders DropdownContent with necessary content', () => {
    render(<DropdownContent {...props} />)

    expect(screen.getByText(resultList[0])).toBeInTheDocument()
    expect(screen.getByText(resultList[1])).toBeInTheDocument()
    expect(screen.getByText(resultList[2])).toBeInTheDocument()
  })

  it('should not have any accessibility violation', async () => {
    const { container } = render(<DropdownContent {...props} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
