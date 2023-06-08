import React, { ReactElement, useEffect, useState } from 'react'

type CounterType = {
  min?: number
  max?: number
  value?: number
  increaser?: ReactElement
  decreaser?: ReactElement
  className?: string
  onChange?: (val: number) => void
}

const Counter = ({
  min,
  max,
  value = 0,
  increaser,
  decreaser,
  className = '',
  onChange
}: CounterType) => {
  const [val, setValue] = useState<number>(value)

  const handleDecrease = () => {
    setValue((_value) =>
      typeof min === 'number' ? Math.max(_value - 1, min) : _value - 1
    )
  }

  const handleIncrease = () => {
    setValue((_value) =>
      typeof max === 'number' ? Math.min(_value + 1, max) : _value + 1
    )
  }

  useEffect(() => {
    if (onChange) {
      onChange(val)
    }
  }, [val])

  if (decreaser) {
    decreaser = React.cloneElement(decreaser, {
      ...decreaser.props,
      onClick: handleDecrease
    })
  }

  if (increaser) {
    increaser = React.cloneElement(increaser, {
      ...increaser.props,
      onClick: handleIncrease
    })
  }

  return (
    <div
      className={`${
        !increaser && !decreaser
          ? 'flex items-center justify-center '
          : className
      }`}
    >
      {decreaser || (
        <span
          aria-label="Counter Decreaser"
          className="w-5 h-5 rounded flex justify-center items-center cursor-pointer"
          onClick={handleDecrease}
        >
          -
        </span>
      )}
      <span aria-label="Counter Value">{val}</span>
      {increaser || (
        <span
          aria-label="Counter Increaser"
          className="w-5 h-5 rounded flex justify-center items-center cursor-pointer"
          onClick={handleIncrease}
        >
          +
        </span>
      )}
    </div>
  )
}

export default Counter
