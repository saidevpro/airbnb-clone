import { screen, render, fireEvent } from '@testing-library/react'
import Counter from './Counter'

describe('<Counter />', () => {
  it('Render Counter corretly with default button', () => {
    render(<Counter value={0} />)

    const inc = screen.getByLabelText('Counter Increaser')
    expect(inc).toBeInTheDocument()

    const dec = screen.getByLabelText('Counter Decreaser')
    expect(dec).toBeInTheDocument()

    const val = screen.getByLabelText('Counter Value')
    expect(val).toBeInTheDocument()
    expect(val).toHaveTextContent('0')
  })

  it('Render Counter with given button', () => {
    render(
      <Counter
        value={0}
        increaser={<span>Add</span>}
        decreaser={<span>Dec</span>}
      />
    )

    const inc = screen.getByText('Add')
    expect(inc).toBeInTheDocument()

    const dec = screen.getByText('Dec')
    expect(dec).toBeInTheDocument()
  })

  it('Handle click with default button', () => {
    render(<Counter value={0} />)

    const inc = screen.getByLabelText('Counter Increaser')
    fireEvent.click(inc)
    fireEvent.click(inc)

    const val = screen.getByLabelText('Counter Value')
    expect(val).toHaveTextContent('2')

    const dec = screen.getByLabelText('Counter Decreaser')
    fireEvent.click(dec)

    expect(val).toHaveTextContent('1')
  })

  it('Handle click with given button', () => {
    render(
      <Counter
        value={0}
        increaser={<span>Add</span>}
        decreaser={<span>Dec</span>}
      />
    )
    const inc = screen.getByText('Add')
    fireEvent.click(inc)
    fireEvent.click(inc)

    const val = screen.getByLabelText('Counter Value')
    expect(val).toHaveTextContent('2')

    const dec = screen.getByText('Dec')
    fireEvent.click(dec)

    expect(val).toHaveTextContent('1')
  })

  it('Do not exceed the limit', () => {
    render(<Counter max={5} min={0} value={0} />)

    const inc = screen.getByLabelText('Counter Increaser')
    const dec = screen.getByLabelText('Counter Decreaser')

    Array(8)
      .fill(0)
      .forEach((_) => fireEvent.click(inc))

    const val = screen.getByLabelText('Counter Value')
    expect(val).toHaveTextContent('5')

    Array(10)
      .fill(0)
      .forEach((_) => fireEvent.click(dec))

    expect(val).toHaveTextContent('0')
  })

  it('Call prop function onChange', () => {
    const mockOnChange = jest.fn()
    render(<Counter onChange={mockOnChange} />)

    const inc = screen.getByLabelText('Counter Increaser')
    const dec = screen.getByLabelText('Counter Decreaser')

    Array(5)
      .fill(0)
      .forEach((_) => fireEvent.click(inc))

    fireEvent.click(dec)

    expect(mockOnChange).toHaveBeenCalledTimes(7) // 6+1: Consider first change when component is loaded
    expect(mockOnChange).toHaveBeenCalledWith(4)
  })
})
