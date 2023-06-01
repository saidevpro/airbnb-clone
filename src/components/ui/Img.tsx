import React from 'react'

type ImgProps = {
  src: string
  caption?: string
}

const Img = React.forwardRef<HTMLImageElement, ImgProps>(
  ({ src, caption }, ref) => {
    return <img src={src} alt={caption} ref={ref} />
  }
)

export default Img
