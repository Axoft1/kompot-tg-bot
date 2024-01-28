import { useEffect } from 'react';
import './App.css';
import Header from './components/header';
import { useTelegram } from './hooks/useTelegram';
import Button from './components/button';

function App() {

 const {onToggleButton, tg} = useTelegram()
  
  useEffect(() => {
    tg.ready()
  },[])
  
  return (
    <div className="App">
     <Header/>
      <Button onClick={onToggleButton}>Toggle</Button>
    </div>
  );
}

export default App;
