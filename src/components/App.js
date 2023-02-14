import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
  const [name, setName] = useState("____");
  const [input, setInput] = useState("");
   const handleButtonClick = () => {
   setName(input);
  };
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div id="main">
      <input id='input' onChange={handleInputChange}></input>
      <button id='button' onClick={handleButtonClick}>Click</button>
      <p id='text'>Hello my name is {name} and I study at Newton School</p>
    </div>
  )
}

export default App;
