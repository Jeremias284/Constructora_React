import AgregarConstructora from "./components/agregarConstructora";
import Boton from "./components/Boton";
import Constructora from "./components/Constructora";
import Constructoras from "./components/Constructoras";
import Header from "./components/Header";
import {useState, useEffect} from 'react';
import React from 'react';


function App() {
  const [showAddConstructora, setShowAddConstructora] = useState (false);

  const [constructoras, setConstructoras] = useState([])

  useEffect(() => {
    const getConstructoras = async () => {
      const constructorasDelServidor = await fetchConstructoras();
      setConstructoras(constructorasDelServidor);
    }

    getConstructoras();
  }, [])

  //FETCH CALDERAS
  const fetchConstructoras= async () => {
    const res = await fetch('http://localhost:5000/constructoras');
    const data = await res.json();

    return data;
  }

   //FETCH CALDERA
   const fetchConstructora = async (id) => {
    const res = await fetch(`http://localhost:5000/constructoras/${id}`)
    const data = await res.json();

    return data;
  }

  //AGREGAR CALDERA
  const agregarConstructora = async (constructora) => {
    const res = await fetch('http://localhost:5000/constructoras', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(constructora)
    })

    const data = await res.json()
    setConstructoras([...constructoras, data])

  }

  //ELIMINAR CALDERA
  const eliminarConstructora = async (id) => {
    await fetch(`http://localhost:5000/constructoras/${id}`, {
      method: 'DELETE', 
    })

    setConstructoras(constructoras.filter((constructora) => constructora.id !== id  ))
  }

  //TOGGLE RECORDATORIO
  const toggleRecordatorio = async(id) => {
    const constructoraParaToggle = await fetchConstructora(id);
    const updConstructora = {...constructoraParaToggle, 
    reminder: !constructoraParaToggle.reminder}

    const res = await fetch(`http://localhost:5000/constructoras/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updConstructora)
    })

    const data = await res.json()


    setConstructoras(constructoras.map((constructora) => constructora.id === id ? { ...constructora, reminder: data.reminder } : constructora)) //cambia el estado del reminder
  }
 

  return (
     <div className="container">
        <Header onAdd={() => setShowAddConstructora(!setShowAddConstructora)} showAdd= {showAddConstructora} />
          {showAddConstructora && <AgregarConstructora onAdd={agregarConstructora} />}
        {constructoras.length > 0 ? <Constructoras constructoras={constructoras} onDelete =  {eliminarConstructora} onToggle={toggleRecordatorio} /> : 'No Constructoras to show'}

        <footer />
     </div>
     //si hay calderas > 0, las muestra, sino muestra cartel
  );
}


export default App;

