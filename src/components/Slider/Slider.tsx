import React, {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import {
  ArrowLeft as DefaultPrevArrow,
  ArrowRight as DefaultNextArrow
} from '../UI/Arrow'

type SliderPropsType = {
  pagination?: boolean
  navigation?: boolean
  prevArrow?: React.ReactNode
  nextArrow?: React.ReactNode
}

const Slider: FunctionComponent<PropsWithChildren<SliderPropsType>> = ({
  children,
  pagination = false,
  navigation = false,
  prevArrow,
  nextArrow
}) => {
  const SliderWidth = useRef(0)
  const [step, setStep] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const sliderRefList = useRef<HTMLDivElement>(null)
  const slideCount = Array.isArray(children)
    ? children.length
    : children
    ? 1
    : 0

  useEffect(() => {
    sliderRef.current?.querySelector('img')?.addEventListener('load', () => {
      if (sliderRef.current) {
        SliderWidth.current = sliderRef.current.getBoundingClientRect().width
      }
    })

    window.addEventListener('resize', () => {
      if (sliderRef.current) {
        SliderWidth.current = sliderRef.current.getBoundingClientRect().width
      }

      setStep(0)
    })
  }, [])

  const listPosition = useMemo(() => {
    return SliderWidth.current * step
  }, [step])

  const handlePrevSlide = () => {
    setStep((prevStep) => Math.max(0, prevStep - 1))
  }

  const handleNextSlide = () => {
    setStep((prevStep) => Math.min(slideCount - 1, prevStep + 1))
  }

  return (
    <div
      role="slider"
      className="slider relative w-full overflow-hidden"
      ref={sliderRef}
    >
      <div
        className="slider-list flex items-stretch transition-transform duration-300"
        ref={sliderRefList}
        style={{
          transform: `translate3d(-${listPosition}px, 0, 0)`
        }}
      >
        {children}
      </div>
      {pagination && (
        <div
          role="pagination"
          className="absolute left-0 right-0 bottom-3 flex items-center justify-center"
        >
          {Array(slideCount)
            .fill(1)
            .map((_, i) => (
              <span
                className={`w-2 h-2 rounded-full mx-0.5 cursor-pointer hover:scale-150 transition-transform ${
                  step === i ? 'bg-white scale-125' : 'bg-white/60'
                }`}
                key={i}
                onClick={(e) => {
                  e.preventDefault()
                  setStep(i)
                }}
              ></span>
            ))}
        </div>
      )}
      {navigation && (
        <div role="navigation">
          {step !== 0 && (
            <button
              className="absolute top-0 bottom-0 left-0 px-2 flex items-center"
              aria-label="prev"
              onClick={handlePrevSlide}
            >
              {prevArrow || <DefaultPrevArrow />}
            </button>
          )}
          {step !== slideCount - 1 && (
            <button
              className="absolute top-0 bottom-0 right-0 px-2 flex items-center"
              aria-label="next"
              onClick={handleNextSlide}
            >
              {nextArrow || <DefaultNextArrow />}
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default Slider
