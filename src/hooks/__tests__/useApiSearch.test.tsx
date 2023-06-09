import { render, waitFor } from '@testing-library/react'
import useApiSearch from '../useApiSearch'
import { act } from 'react-dom/test-utils'
import { useEffect, useState } from 'react'

interface DType {
  id: number
  name: string
}

describe('Hook useApiSearch', () => {
  // eslint-disable-next-line space-before-function-paren
  it('Returns data when promise is executed', async () => {
    let result: DType[] = []

    const mockData = [
      { id: 1, name: 'User #1' },
      { id: 2, name: 'User #2' }
    ]

    const fetchMock = jest.fn(() => {
      return Promise.resolve({
        data: () => mockData
      })
    })

    function Component() {
      const [value, setValue] = useState('')
      result = useApiSearch<DType[]>(fetchMock, value)

      useEffect(() => {
        setTimeout(() => setValue('user #3'), 2000)
      })

      return null
    }

    act(() => {
      render(<Component />)
    })

    await waitFor(() => expect(result).toEqual(mockData))
    await waitFor(() => expect(fetchMock).toBeCalledTimes(2), { timeout: 3000 })

    expect(fetchMock).toBeCalledWith('user #3')
  })
})
