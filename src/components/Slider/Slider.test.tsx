import { screen, render } from '@testing-library/react'
import Slider from './Slider'

describe('<Slider /> Component', () => {
  it('Render in the document', () => {
    render(
      <Slider
        images={[
          {
            src: 'image1.png'
          }
        ]}
      />
    )

    const slider = screen.getByRole('slider')
    expect(slider).toBeInTheDocument()
  })

  it('Render all images correctly', () => {
    render(
      <Slider
        images={[
          {
            src: 'image1.png'
          },
          {
            src: 'image2.png'
          },
          {
            src: 'image3.png'
          }
        ]}
      />
    )

    const images = screen.getAllByRole('img')
    expect(images.length).toEqual(3)
  })
})

describe('<Slider /> Pagination', () => {
  it('Hide pagination when disabled', () => {
    render(
      <Slider
        images={[
          {
            src: 'image1.png'
          }
        ]}
      />
    )

    const pagination = screen.queryByRole('pagination')
    expect(pagination).toBeNull()
  })

  it('Show pagination when enabled', () => {
    render(
      <Slider
        pagination={true}
        images={[
          {
            src: 'image1.png'
          }
        ]}
      />
    )

    const pagination = screen.getByRole('pagination')
    expect(pagination).toBeInTheDocument()
  })
})

describe('<Slider /> Navigation', () => {
  it('Hide Navigation when disabled', () => {
    render(
      <Slider
        images={[
          {
            src: 'image1.png'
          }
        ]}
      />
    )

    const pagination = screen.queryByRole('navigation')
    expect(pagination).toBeNull()
  })

  it('Show Navigation when enabled', () => {
    render(
      <Slider
        navigation={true}
        images={[
          {
            src: 'image1.png'
          }
        ]}
      />
    )

    const navigation = screen.getByRole('navigation')
    expect(navigation).toBeInTheDocument()
  })

  it('Display prevArrow & nextArrow in navigation', () => {
    render(
      <Slider
        navigation={true}
        prevArrow={<div>prev arrow test</div>}
        nextArrow={<div>next arrow test</div>}
        images={[
          {
            src: 'image1.png'
          }
        ]}
      />
    )

    const prevButton = screen.getByText('prev arrow test')
    expect(prevButton).toBeInTheDocument()

    const nextButton = screen.getByText('next arrow test')
    expect(nextButton).toBeInTheDocument()
  })
})
