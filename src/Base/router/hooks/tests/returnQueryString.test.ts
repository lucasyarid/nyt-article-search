import { queryStringMap } from 'Base/router/types'
import { returnQueryString } from '../returnQueryString'

describe('returnQueryString', () => {
  const runReturnQueryString = (queryValues: queryStringMap) => 
    Object.keys(queryValues).reduce(returnQueryString(queryValues), '')

  it('should return basic query string', () => {
    const queryValues = {
      q: 'elections',
      page: '3'
    }
    const search = runReturnQueryString(queryValues)
    expect(search).toBe('q=elections&page=3')
  })

  it('should return proper query after updated page', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const queryValues: {[k: string]: any} = {
      q: 'elections'
    }
    let search = runReturnQueryString(queryValues)
    expect(search).toBe('q=elections')

    queryValues.page = '1'
    search = runReturnQueryString(queryValues)
    expect(search).toBe('q=elections&page=1')
  })
})
