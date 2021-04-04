import React from 'react'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import { InputSearch } from '../InputSearch'

describe('InputSearch', () => {
  const resultList = ['title 1', 'title 2', 'title 3']
  const props = {
    resultList,
    name: 'test',
    label: 'label',
    selected: 0,
    setSelected: jest.fn(),
    isFirstPage: false,
    isLastPage: false,
    onClickNext: jest.fn(),
    onClickPrevious: jest.fn(),
    onDebounced: jest.fn(),
    delay: 300,
    isLoading: true,
    value: 'input test',
  }

  it('should not have any accessibility violation', async () => {
    const { container } = render(<InputSearch {...props} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
