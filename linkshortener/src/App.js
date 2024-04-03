import './App.css';
import Background from './componets/Background';
import UrlInput from './componets/UrlInput';
import UrlOutput from './componets/UrlOutput';
import UseLink from './UseLink';
import { useState } from 'react';
function App() {
const [link,setLink]=useState("")

  return (
    <div className="App">
      <UrlInput setlink={setLink}/>
      <UrlOutput link={link}/>
      <Background/>
    </div>
  );
}

export default App;
