import Slider from './components/Slider/Slider'
import SliderItem from './components/Slider/SliderItem'
import { ArrowLeft, ArrowRight } from './components/ui/Arrow'
import Img from './components/ui/Img'
import { generateImages } from './fixtures/images'

const images = generateImages(4)

const App = () => {
  return (
    <div className="App">
      <h1 className="text-4xl text-center">Hello World</h1>
      <br />
      <Slider
        navigation={true}
        pagination={true}
        prevArrow={<ArrowLeft size={30} className="text-white" />}
        nextArrow={<ArrowRight size={30} className="text-white" />}
      >
        {images.map(({ src, caption }) => (
          <SliderItem key={src}>
            <Img src={src} caption={caption} />
          </SliderItem>
        ))}
      </Slider>
    </div>
  )
}

export default App
