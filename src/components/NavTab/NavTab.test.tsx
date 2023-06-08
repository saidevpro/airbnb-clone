import { screen, render, fireEvent } from '@testing-library/react'
import NavTabItem from './NavTabItem'
import NavTabList from './NavTabList'
import NavTab from './NavTab'

describe('<NavTabItem />', () => {
  it('Rendering content', () => {
    render(
      <NavTabItem title={<h6>Tab#1</h6>}>
        <p role="paragraph">Content Tab 1</p>
      </NavTabItem>
    )

    const li = screen.getByRole('listitem')
    expect(li).toBeInTheDocument()

    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Tab#1')

    const paragraph = screen.queryByRole('paragraph')
    expect(paragraph).toBeNull()
  })
})

describe('<NavTabList />', () => {
  beforeEach(() => {
    render(
      <NavTabList>
        <NavTabItem title={<h6>Tab#1</h6>}>
          <p role="paragraph">Content Tab 1</p>
        </NavTabItem>
        <NavTabItem title={<h6>Tab#2</h6>}>
          <p role="paragraph">Content Tab 2</p>
        </NavTabItem>
        <NavTabItem title={<h6>Tab#3</h6>}>
          <p role="paragraph">Content Tab 3</p>
        </NavTabItem>
      </NavTabList>
    )
  })

  it('Rendering content', () => {
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
  })
})

describe('<NavTab />', () => {
  beforeEach(() => {
    render(
      <NavTab>
        <NavTabList>
          <NavTabItem title={<h6>Tab#1</h6>}>
            <p role="paragraph">Content Tab 1</p>
          </NavTabItem>
          <NavTabItem title={<h6>Tab#2</h6>}>
            <p role="paragraph">Content Tab 2</p>
          </NavTabItem>
          <NavTabItem title={<h6>Tab#3</h6>}>
            <p role="paragraph">Content Tab 3</p>
          </NavTabItem>
        </NavTabList>
      </NavTab>
    )
  })

  it('Rendering all items', () => {
    const tabs = screen.getByRole('tabs')
    expect(tabs).toBeInTheDocument()

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(3)
  })

  it('Change view when click on Tab', () => {
    const links = screen.getAllByRole('link')
    expect(screen.queryByRole('paragraph')).toHaveTextContent('Content Tab 1')

    fireEvent.click(links[1])

    const p2 = screen.queryByRole('paragraph')
    expect(p2).toHaveTextContent('Content Tab 2')

    fireEvent.click(links[2])

    const p3 = screen.queryByRole('paragraph')
    expect(p3).toHaveTextContent('Content Tab 3')
  })
})
