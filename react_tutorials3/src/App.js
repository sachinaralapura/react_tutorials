import { useState } from 'react';
import './App.css';
import CounterOne from './Components/CounterOne';
import DocTitle from './Components/DocTitle';
import useDocumentTitle from './CostomHooks/useDocumentTitle';

function App() {
  const [count ,setCount] = useState(0)
  useDocumentTitle(count)
  return (
    <div className="App">
      <DocTitle></DocTitle>
      <button onClick={() =>{setCount(count +1 )}}> count - {count}</button>
      <CounterOne></CounterOne>
    </div>
  );
}

export default App;
