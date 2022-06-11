import React from 'react';
import './App.css';
import Annotations from './components/Annotations';
import ContentArea from './components/ContentArea';
import Records from './components/Records';

function App() {
  return (
    <div className='container'>
 
        <Records/>
        <ContentArea/>
        <Annotations/>
    </div>
  );
}

export default App;
