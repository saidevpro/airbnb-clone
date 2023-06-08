import Counter from './components/Counter/Counter'

const App = () => {
  return (
    <div className="App">
      <h1 className="text-4xl text-center">Hello World</h1>
      <br />
      <Counter max={10} min={-1} onChange={(v) => console.log('value: ' + v)} />
    </div>
  )
}

export default App
