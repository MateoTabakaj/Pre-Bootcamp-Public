import './App.css';
import Home from './components/Home';
import Num from './components/Number';
import Style from './components/Style';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path="/:input" element={<Num />}/>     
      <Route path='/:txtcl/:bgcl' element={<Style/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
