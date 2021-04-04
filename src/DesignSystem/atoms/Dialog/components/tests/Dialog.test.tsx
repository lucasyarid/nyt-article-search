import React from 'react'

import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { axe } from 'jest-axe'

import { Dialog } from '../Dialog'

describe('Dialog', () => {
  const title = 'title'
  const content = 'content'
  const onClose = jest.fn()

  const props = {
    isVisible: true,
    onClose,
    title,
    content,
  }

  it('renders Dialog with necessary content', () => {
    render(<Dialog {...props} />)

    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(content)).toBeInTheDocument()
  })

  it('close Dialog', () => {
    render(<Dialog {...props} />)

    const closeButton = screen.getByLabelText('Close')
    userEvent.click(closeButton)

    expect(onClose).toBeCalled()
  })

  it('should not have any accessibility violation', async () => {
    const { container } = render(<Dialog {...props} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
