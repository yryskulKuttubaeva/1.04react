

function App() {
  const example = ["pear", "yellow", "small"];
  const example2 = ["toyota", "camry", "black", "expensive"]

  const [name, color,size] = example
  const [mark, modal, color1, price] =example2


  return (
    <div className="App">
      This {name}is {color} and {size};
      this {mark} is {modal} {color1} and {price}
     

    </div>
  );
}

export default App;
