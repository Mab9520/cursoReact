import { Component, useState, usestate } from "react";


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false)

  const handleFormClick = ()=>{
    setIsLogged(true)
  }

  const handleEmailChange = ({target: {value}}) => {
    setEmail(value);
  };

  const handlePasswordChange = (event) =>{
    setPassword(event.target.value)
  }

  const handleFormSubmit =(event)=>{
    event.preventDefault();
    alert(`Usuario:  ${email} , Password:  ${password}`)
    
  };

  return (
    <div className="App">
      <form onSubmit={ handleFormSubmit}>
        <h2>Iniciar Sesión</h2>
        <label>
          Correo
          <input type="email" value={ email } onChange ={({target: {value}})=>setEmail(value)}/>
        </label>
        <label>
          Contraseña
          <input type="password" value={ password } onChange = {({target: {value}})=>setPassword(value)}/>
        </label>
        <button type="submit" onClick={handleFormClick}>
          Iniciar Sesion
        </button>
        {isLogged ? <h2>Logueado exitosamente :D</h2>: undefined}
      </form>
    </div>
  );
}

export default App;
