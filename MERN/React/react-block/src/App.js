import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import Subcontent from './Components/SubContents';
import Advertisement from './Components/Advertisement';

function App() {
  return (
    <div className="App">
      <Header className="header"></Header>
      <Navigation className="nav"></Navigation>
      <Main className="main">
        <Subcontent className="sbcnt"></Subcontent>
        <Subcontent className="sbcnt"></Subcontent>
        <Subcontent className="sbcnt"></Subcontent>
        <Subcontent className="sbcnt"></Subcontent>
        <Advertisement className="ad"></Advertisement>
      </Main>
    </div>
  );
}

export default App;