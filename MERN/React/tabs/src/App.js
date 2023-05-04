import { useState } from 'react';
import './App.css';
import Tabs from './components/tabs';
import Display from './components/Display';

function App() {

  

  const [content,setcontent]=useState("")
  
  return (
    <div className="App">
      <div className='tab'>
      <Tabs setcontent={setcontent} />
      </div>
      <div className='display'>
      <Display content={content}/>
      </div>
    </div>
  );
}

export default App;
