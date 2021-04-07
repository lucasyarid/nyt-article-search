import React from 'react'
import { screen, render } from '@testing-library/react'
import { axe } from 'jest-axe'

import { DropdownContent } from '../DropdownContent'
import { BrowserRouter as Router } from 'react-router-dom'

describe('DropdownContent', () => {
  const resultList = [
    { label: 'title 1', url: '/atest1' },
    { label: 'title 2', url: '/test2' },
    { label: 'title 3', url: '/test3' },
  ]
  const props = {
    resultList,
    selected: 0,
    setSelected: jest.fn(),
  }

  it('renders DropdownContent with necessary content', () => {
    render(
      <Router>
        <DropdownContent {...props} />
      </Router>
    )

    expect(screen.getByText(resultList[0].label)).toBeInTheDocument()
    expect(screen.getByText(resultList[1].label)).toBeInTheDocument()
    expect(screen.getByText(resultList[2].label)).toBeInTheDocument()
  })

  it('should not have any accessibility violation', async () => {
    const { container } = render(
      <Router>
        <DropdownContent {...props} />
      </Router>
    )
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
