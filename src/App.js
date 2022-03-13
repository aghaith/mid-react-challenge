import './App.css';
import { useState } from 'react';

function App() {
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  let input;
  let palindrome = [];
  const handleInput = (e) => {
    input = e.target.value;
    console.log(input)
  }

  const reverseWord = (value) => {
    for(let i = (value.length - 1); i > -1; i--) {
      const elem = value[i];
      console.log(elem)
      palindrome.push(elem)
    }
  }

  const concatWord = () => {
    palindrome = palindrome.join('');
    console.log(palindrome);
  }

  const confirmMatch = () => {
    if (input === palindrome) {
      //console.log('yayyyyy');
      setSuccess(true);
      return;
    }
    //console.log('boooo');
    setFail(true);
  }

  const clearPalindrome = () => {
    palindrome = [];
  }

  const resetForm = () => {
    if (fail || success) {
      setSuccess(false);
      setFail(false);
    }
  }

  const checkIfPalindrome = (value) => {
    resetForm();
    reverseWord(value)
    concatWord()
    confirmMatch();
    clearPalindrome()
  }

  return (
    <div className="App">
      <div className="main">
        <h1>Coding Challenge</h1>
        <h2>This is the palindrome coding challenge!</h2>
        <div className="InputArea">
          <input onChange={(e) => handleInput(e)} type="text" />
          <button onClick={() => checkIfPalindrome(input) }>Submit</button>
        </div>
        {success && <div className="success">That's a palindrome!</div>}
        {fail && <div className="fail">Sorry that's not a palindrome...</div>}
        {/*<div>yayyyy</div>*/}
      </div>
    </div>
  );
}

export default App;
