type SliderProps = {
  images: Image[]
  enablePagination?: Boolean
  enableNavigation?: Boolean
  prevArrow?: React.ReactNode
  nextArrow?: React.ReactNode
}

function DefaultNextArrow() {
  return <span>Next</span>
}

function DefaultPrevArrow() {
  return <span>Prev</span>
}

const Slider = ({
  images,
  enablePagination = false,
  enableNavigation = false,
  prevArrow,
  nextArrow
}: SliderProps) => {
  return (
    <div role="slider" className="slider relative h-full">
      <div className="slider-list">
        <div className="slide-item absolute top-0 left-0 right-0 bottom-0">
          {images.map((image) => (
            <img src={image.src} alt={image.caption} key={image.src} />
          ))}
        </div>
      </div>
      {enablePagination && (
        <div role="pagination">
          {images.map((image) => (
            <span key={image.src}></span>
          ))}
        </div>
      )}
      {enableNavigation && (
        <div role="navigation">
          <button aria-label="prev">
            {prevArrow ? prevArrow : <DefaultPrevArrow />}
          </button>
          <button aria-label="next">
            {nextArrow ? nextArrow : <DefaultNextArrow />}
          </button>
        </div>
      )}
    </div>
  )
}

export default Slider
