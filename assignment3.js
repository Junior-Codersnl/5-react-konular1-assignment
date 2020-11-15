import {useState} from 'react';

function App() {
  return (
    <div className="App">
      <div>
        <Counter/>
      </div>
    </div>
  );
}

export default App;

function Counter () {
  const[count, setCount] = useState(0);
  const feedback = count > 10 ? "Bigger than 10" : "Keep counting ...";
  const Count = () => <p>`You clicked {count} times.`</p>;
  const Button = () => 
    <button style={{background:"red", color:"white"}} onClick={() => setCount(count+1)}>
      Add 1!
    </button>;
  return (
    <div>
      <p>{feedback}</p>
      <Button/>
      <Count/>
    </div>
  );
}