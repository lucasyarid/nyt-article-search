import React from 'react'
import { screen, render } from '@testing-library/react'
import { axe } from 'jest-axe'

import { Navigation } from '../Navigation'

describe('Navigation', () => {
  const props = {
    isFirstPage: false,
    isLastPage: false,
    onClickNext: jest.fn(),
    onClickPrevious: jest.fn(),
  }

  it('renders Navigation with necessary content', () => {
    render(<Navigation {...props} />)

    expect(screen.getByLabelText('Previous Page')).toBeInTheDocument()
    expect(screen.getByLabelText('Next Page')).toBeInTheDocument()
  })

  it('Hide buttons', () => {
    render(<Navigation {...props} isFirstPage isLastPage />)

    expect(screen.queryByLabelText('Previous Page')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Next Page')).not.toBeInTheDocument()
  })

  it('should not have any accessibility violation', async () => {
    const { container } = render(<Navigation {...props} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
