import React from 'react';
import './App.css';
import Annotations from './components/Annotations';
import ContentArea from './components/ContentArea';
import Records from './components/Records';
import Prompt from './UI/Prompt';
import { useSelector } from 'react-redux/es/exports';

function App() {
  const showPrompt = useSelector(state=>state.modal.promptIsShown)

  return (
    <div className='container'>
        {showPrompt && <Prompt/>}
        <Records/>
        <ContentArea/>
        <Annotations/>
    </div>
  );
}

export default App;
