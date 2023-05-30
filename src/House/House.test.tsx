import { screen, render } from '@testing-library/react'
import House from './House'

describe('<House />', () => {
  beforeEach(() => {
    render(
      <House
        adress="Merzougha, Morocco"
        name="Hotel at Merzougha"
        dates={['May 01', 'June 09']}
        price={1200}
      />
    )
  })

  it('Render the component', () => {
    const houseEl = screen.getByRole('article')
    expect(houseEl).toBeInTheDocument()
  })

  it('Render children properly', () => {
    const titleEl = screen.getByRole('heading', {
      level: 2
    })
    expect(titleEl).toBeInTheDocument()

    const nameEl = screen.getByRole('heading', {
      level: 3
    })
    expect(nameEl).toBeInTheDocument()

    const availabilityEl = screen.getByRole('time')
    expect(availabilityEl).toBeInTheDocument()

    const priceEl = screen.getByRole('price')
    expect(priceEl).toBeInTheDocument()
  })
})
