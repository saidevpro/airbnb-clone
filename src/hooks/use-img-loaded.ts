import { MutableRefObject, useEffect, useRef, useState } from 'react'

type ReturnType = [boolean, MutableRefObject<HTMLImageElement[]>]

export default function useImgLoaded(): ReturnType {
  const refs = useRef<HTMLImageElement[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    let count = 0
    const imgs = refs.current

    const onLoad = () => {
      count++

      if (count === imgs.length) {
        setIsLoaded(true)
      }
    }

    imgs.forEach((img) => {
      img.onload = onLoad
      img.onerror = onLoad
    })
  }, [])

  return [isLoaded, refs]
}
