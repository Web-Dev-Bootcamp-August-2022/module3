// import { useState, useEffect } from 'react';
// import Counter from './components/Counter';
import IronBnbList from './components/IronBnbList';
import './App.css';
 
function App() {
  // const [show, setShow] = useState(true);

  // useEffect(() => {
  //   console.log('This will run when my Counter mounts or unmounts :)')
  // }, [show])

  return (
    <div className="App">
   
      <IronBnbList />
      {/* <button onClick={() => setShow(!show)}>
        { show ? "Hide" : "Show"}
      </button>

      {show && <Counter />} */}

    </div>
  );
}
export default App;