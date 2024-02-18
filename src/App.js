import './App.css';
import { useState } from 'react';
import Stylechanger from './Stylechanger/Stylechanger';
import Fontsize from './Fontsize/Fontsize';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let [count, setcount] = useState(1);
  let [bg, setBg] = useState('bg-info');

  function sub() {
    if (count > 1) {
      count -= 1;
      setcount(count);
    }
  }

  return (
    <>
      <div style={{ height: '100vh' }} className={bg}>
        <h2>Counter</h2>
        <h3>Value : {count}</h3>
        <button onClick={sub}>Substract</button>
        &nbsp;
        <button onClick={() => setcount(count + 1)}>Add</button>

        <br />
        <hr />

        <Stylechanger />
        <Fontsize />

        <div className='d-flex justify-content-evenly'>
          <button className='btn btn-danger' onClick={()=>setBg('bg-danger')}>Red</button>
          <button className='btn btn-success' onClick={()=>setBg('bg-success')}>Green</button>
        </div>

      </div>
    </>
  );
}

export default App;
