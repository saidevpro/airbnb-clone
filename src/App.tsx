import NavTab from './components/NavTab/NavTab'
import NavTabList from './components/NavTab/NavTabList'
import NavTabItem from './components/NavTab/NavTabItem'

const App = () => {
  return (
    <div className="App">
      <h1 className="text-4xl text-center">Hello World</h1>
      <br />
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
    </div>
  )
}

export default App
