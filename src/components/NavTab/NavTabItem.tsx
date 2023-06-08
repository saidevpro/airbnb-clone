import { FunctionComponent, ReactNode } from 'react'

export type NavTabItemType = {
  className?: string
  title: string | ReactNode
  children: ReactNode
}

const NavTabItem: FunctionComponent<NavTabItemType> = ({
  className,
  title
}) => {
  return <li className={className}>{title}</li>
}

NavTabItem.displayName = 'NavTabItem'

export default NavTabItem
