import Slider from './components/Slider/Slider'
import { generateImages } from './fixtures/images'

const images = generateImages(10)

const App = () => {
  return (
    <div className="App">
      <h1 className="text-4xl text-center">Hello World</h1>
      <br />
      <br />
      <Slider images={images} navigation={true} pagination={true} />
    </div>
  )
}

export default App
