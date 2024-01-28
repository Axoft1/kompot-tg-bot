import { useEffect } from 'react';
import './App.css';

const tg = Telegram.WebApp
function App() {

  const closeApp = () => {
    tg.close()
  }
  
  useEffect(() => {
    tg.ready()
  },[])
  
  return (
    <div className="App">
      App
      <button onClick={closeApp}>Закрыть</button>
    </div>
  );
}

export default App;
