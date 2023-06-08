import React, {
  FunctionComponent,
  ReactElement,
  ReactNode,
  useState
} from 'react'
import { NavTabListType } from './NavTabList'

type NavTabType = {
  className?: string
  children: ReactElement<NavTabListType, FunctionComponent>
}

const NavTab = ({ className, children }: NavTabType) => {
  const [contentIndex, setContentIndex] = useState<number>(0)
  const headings: ReactNode[] = []
  let contents: ReactNode[] = []

  React.Children.forEach(children, (child) => {
    if (child.type.displayName === 'NavTabList') {
      React.Children.forEach(child.props.children, (ni, i) => {
        const title = (
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              setContentIndex(i)
            }}
          >
            {ni.props.title}
          </a>
        )

        const className = `${ni.props.className || ''} ${
          contentIndex === i ? 'active' : ''
        }`.trim()

        headings.push(
          React.cloneElement(
            ni,
            {
              ...ni.props,
              title,
              key: i,
              className: className || undefined
            },
            null
          )
        )
        contents = contents.concat(React.Children.toArray(ni.props.children))
      })
    }
  })

  return (
    <React.Fragment>
      <nav role="tabs" className={className}>
        {headings}
      </nav>
      <div aria-label="Tabulation Content">
        {contents.map((Content, i) => (contentIndex === i ? Content : null))}
      </div>
    </React.Fragment>
  )
}

export default NavTab
