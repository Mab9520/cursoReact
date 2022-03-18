import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from "react"
import { render } from '@testing-library/react';

const jsonData = [
  {
    key: "1",
    name: "Mab"
  },
  {
    key: "2",
    name: "Fer"
  },
  {
    key: "3",
    name: "Misa"
  },
  {
    key: "4",
    name: "Roberto"
  }
]

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 4000)
  }, []);

  const renderData = () =>{

    return jsonData?.map((value) =>(
          <div key={value.key}>
            <p>{value.name}</p>
          </div>
    ));
  };
  return(
    <div>
      {isLoading ? <h2>Cargando...</h2> : renderData()}
    </div>
  );
}

export default App;
