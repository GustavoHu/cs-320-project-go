import React, { useState } from 'react';
import './App.css'; // Asegúrate de importar el archivo de estilos

function App() {
  // Estados para manejar el mensaje y los inputs del formulario
  const [message, setMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = async () => {
    try {
      // Realizar una solicitud POST al backend con los datos del formulario
      const response = await fetch('http://localhost:8080/hello/personalized', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName }),
      });
      const text = await response.text();
      setMessage(text); // Actualizar el estado con el mensaje recibido
    } catch (error) {
      console.error('Error al conectar con el backend:', error);
      setMessage('Failed to fetch message.');
    }
  };

  return (
      <div className="App">
        <h1>Personalized Greeting</h1>
        <div className="form-container">
          <label>First Name: </label>
          <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)} // Actualizar el valor del estado
          />
          <br/>
          <label>Last Name: </label>
          <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} // Actualizar el valor del estado
          />
          <br/>
          <div className="button-container">
            <button onClick={handleSubmit}>Submit</button>
          </div>
          </div>
          {message && <p>{message}</p>} {/* Mostrar el mensaje si está disponible */}
        </div>
        );
        }

        export default App;
