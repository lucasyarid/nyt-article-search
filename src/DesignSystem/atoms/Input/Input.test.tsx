import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'

import Icon from 'DesignSystem/quarks/Icon'

import { Input } from '.'

describe('Input', () => {
  const name = 'inputName'
  const label = 'InputLabel'
  const placeholder = 'placeholder'
  const IconArrowTestId = 'icon-arrow-left'
  const IconArrowLeft = () => <Icon.ArrowLeft data-testid={IconArrowTestId} />

  const props = {
    name,
    label,
    placeholder,
    icon: IconArrowLeft,
  }

  it('renders Input with necessary content', () => {
    render(<Input {...props} />)

    expect(screen.getByPlaceholderText(placeholder)).toHaveAttribute('id', name)
    expect(screen.getByText(label)).toBeInTheDocument()
    expect(screen.queryByTestId(IconArrowTestId)).toBeInTheDocument()
  })

  it('renders input value on type', () => {
    render(<Input {...props} />)

    const input = screen.getByPlaceholderText(placeholder)
    const testText = 'test'

    userEvent.type(input, testText)
    expect(input).toHaveValue(testText)
  })

  it('should not have any accessibility violation', async () => {
    const { container } = render(<Input {...props} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
