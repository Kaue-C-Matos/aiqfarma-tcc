import './App.css';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [farmacia, setFarmacia] = useState([])

  const request = useCallback(
    async () => {
      try {
        const {data} = await axios('http://localhost:3000/farmacia');
        setFarmacia(data)
      } catch(err) {
        return err
      }
    }, []) 

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{
    request()
  }, [])


  return (
    <div>
      {farmacia.map((farmacia) => (
        <p key={farmacia.id_farmacia}>{farmacia.nome}</p>
      ))}
    </div>
  );
}

export default App;
