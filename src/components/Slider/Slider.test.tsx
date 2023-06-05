import { screen, render, fireEvent } from '@testing-library/react'
import Slider from './Slider'
import SliderItem from './SliderItem'

describe('<Slider /> Component', () => {
  it('Render in the document', () => {
    render(
      <Slider>
        <SliderItem>Item 1</SliderItem>
      </Slider>
    )

    const slider = screen.getByRole('slider')
    expect(slider).toBeInTheDocument()
  })

  it('Render all items correctly', () => {
    render(
      <Slider>
        <SliderItem>
          <img src="image1.png" alt="" />
        </SliderItem>
        <SliderItem>
          <img src="image2.png" alt="" />
        </SliderItem>
        <SliderItem>
          <img src="image3.png" alt="" />
        </SliderItem>
      </Slider>
    )

    const images = screen.getAllByRole('img')
    expect(images.length).toEqual(3)
  })
})

describe('<Slider /> Pagination', () => {
  it('Hide pagination when disabled', () => {
    render(
      <Slider>
        <SliderItem>Item 1</SliderItem>
        <SliderItem>Item 2</SliderItem>
      </Slider>
    )

    const pagination = screen.queryByRole('pagination')
    expect(pagination).toBeNull()
  })

  it('Show pagination when enabled', () => {
    render(
      <Slider pagination={true}>
        <SliderItem>Item 1</SliderItem>
        <SliderItem>Item 2</SliderItem>
      </Slider>
    )

    const pagination = screen.getByRole('pagination')
    expect(pagination).toBeInTheDocument()
  })
})

describe('<Slider /> Navigation', () => {
  it('Hide Navigation when disabled', () => {
    render(
      <Slider>
        <SliderItem>Item 1</SliderItem>
        <SliderItem>Item 2</SliderItem>
      </Slider>
    )

    const pagination = screen.queryByRole('navigation')
    expect(pagination).toBeNull()
  })

  it('Show Navigation when enabled', () => {
    render(
      <Slider navigation={true}>
        <SliderItem>Item 1</SliderItem>
        <SliderItem>Item 2</SliderItem>
      </Slider>
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
      >
        <SliderItem>Item 1</SliderItem>
        <SliderItem>Item 2</SliderItem>
        <SliderItem>Item 3</SliderItem>
      </Slider>
    )

    fireEvent.click(screen.getByLabelText('next'))

    const prevButton = screen.getByText('prev arrow test')
    expect(prevButton).toBeInTheDocument()

    const nextButton = screen.getByText('next arrow test')
    expect(nextButton).toBeInTheDocument()
  })
})
