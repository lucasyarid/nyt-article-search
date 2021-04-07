import React from 'react'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { BrowserRouter as Router } from 'react-router-dom'

import { InputSearch } from '../InputSearch'

describe('InputSearch', () => {
  const resultList = [
    { label: 'title 1', url: '/atest1' },
    { label: 'title 2', url: '/test2' },
    { label: 'title 3', url: '/test3' },
  ]
  const props = {
    resultList,
    name: 'test',
    label: 'label',
    onDebounced: jest.fn(),
    delay: 300,
    isLoading: true,
    value: 'input test',
  }

  it('should not have any accessibility violation', async () => {
    const { container } = render(
      <Router>
        <InputSearch {...props} />
      </Router>
    )
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
