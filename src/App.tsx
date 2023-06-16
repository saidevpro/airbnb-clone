import useImgLoaded from './hooks/use-img-loaded'

const App = () => {
  const [loaded, refImgs] = useImgLoaded()

  return (
    <div className="App">
      <h1 className="text-4xl text-center">Hello World</h1>
      {loaded ? 'Loaded' : 'Not loaded'}
      {Array(2)
        .fill(0)
        .map((k, v) => (
          <img
            src={`https://picsum.photos/100/75?random=${v}`}
            key={v}
            ref={(_ref) => _ref && (refImgs.current[v] = _ref)}
            alt=""
          />
        ))}
    </div>
  )
}

export default App
