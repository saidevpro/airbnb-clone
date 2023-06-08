type ArrowPropsType = {
  size?: number | string
  className?: string
}

export function ArrowLeft({ size = 18, className }: ArrowPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      fill="currentColor"
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
      />
    </svg>
  )
}

export function ArrowRight({ size = 18, className }: ArrowPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      fill="currentColor"
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  )
}
