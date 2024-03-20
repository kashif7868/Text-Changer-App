// import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  // const [val, setValue] = useState(1);
  return (
    <div className="app">
      {/* <h2> App</h2>
      <Child1 value={val} /> */}
      {/* <Navbar design="Design Vista" /> */}
      <Navbar />
      <div className="container">
        <TextForm textWrite="Write the Any One Text" />
      </div>
    </div>
  );
}

export default App;
