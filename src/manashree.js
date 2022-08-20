const Hello = (proprs) => {
    return (
      <div>
        <p>Hello {proprs.name} . your age is {proprs.age}</p>
      </div>
    )
  }
  
  const App2 = () => {
    return (
      <div>
        <h1>Greetings</h1>
        <Hello name="George" age='22' />
        <Hello name="Daisy" age='17' />
      </div>
    )
  }
  export default App2;