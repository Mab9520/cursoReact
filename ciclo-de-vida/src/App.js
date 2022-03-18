
import {useState, useEffect} from "react";

const App = () =>{
  const [name, setName] = useState("");
  const [age, setAge] = useState(0)
/**componentDidUpdate */
  useEffect(() =>{
    console.log("didUpdate effect")

  });

/**componentDidMount Hacer llamadas a API o algo que se requiera cuando el componente se monte*/
useEffect(() =>{
  console.log("componentDidMount effect")

}, []);
/**Unicamente va a cambiar cuando se cambie name */
useEffect(() =>{
  console.log("name cambió")

}, [name]);

  return(
    <div>
      <label>
        Nombre 
        <input value={ name } onChange = {({target : {value}}) => setName(value)}></input> 
      </label>
      <label>
        Age 
        <input value={ age } onChange = {({target : {value}}) => setAge(value)}></input> 
      </label>
    </div>
  );
}

export default App;
