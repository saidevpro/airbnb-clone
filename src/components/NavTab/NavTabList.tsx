import { FunctionComponent, ReactElement } from 'react'
import { NavTabItemType } from './NavTabItem'

export type NavTabListType = {
  className?: string
  children: ReactElement<NavTabItemType> | ReactElement<NavTabItemType>[]
}

const NavTabList: FunctionComponent<NavTabListType> = ({
  className,
  children
}) => {
  return <ul className={className}>{children}</ul>
}

NavTabList.displayName = 'NavTabList'

export default NavTabList
