import React, { useEffect, useMemo, useRef, useState } from 'react'
import Img from '../ui/Img'
import {
  ArrowLeft as DefaultPrevArrow,
  ArrowRight as DefaultNextArrow
} from '../ui/Arrow'

type SliderProps = {
  images: Image[]
  pagination?: boolean
  navigation?: boolean
  prevArrow?: React.ReactNode
  nextArrow?: React.ReactNode
}

const Slider = ({
  images,
  pagination = false,
  navigation = false,
  prevArrow,
  nextArrow
}: SliderProps) => {
  const SliderWidth = useRef(0)
  const [step, setStep] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const sliderRefList = useRef<HTMLDivElement>(null)

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
    setStep((prevStep) => Math.min(images.length - 1, prevStep + 1))
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
        {images.map(({ src, caption }) => (
          <div className="slide-item w-full flex-full" key={src}>
            <Img src={src} caption={caption} />
          </div>
        ))}
      </div>
      {pagination && (
        <div
          role="pagination"
          className="absolute left-0 right-0 bottom-3 flex items-center justify-center"
        >
          {images.map((image, i) => (
            <span
              className={`w-2 h-2 rounded-full mx-0.5 ${
                step === i ? 'bg-white' : 'bg-white/60'
              }`}
              key={image.src}
            ></span>
          ))}
        </div>
      )}
      {navigation && (
        <div role="navigation">
          <button
            className="absolute top-0 bottom-0 left-0 px-2 flex items-center"
            aria-label="prev"
            onClick={handlePrevSlide}
          >
            {prevArrow || <DefaultPrevArrow />}
          </button>
          <button
            className="absolute top-0 bottom-0 right-0 px-2 flex items-center"
            aria-label="next"
            onClick={handleNextSlide}
          >
            {nextArrow || <DefaultNextArrow />}
          </button>
        </div>
      )}
    </div>
  )
}

export default Slider
