import { PropsWithChildren } from 'react'

export default function SliderItem({ children }: PropsWithChildren) {
  return <div className="slide-item w-full flex-full">{children}</div>
}
