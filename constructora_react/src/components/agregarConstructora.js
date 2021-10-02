import React from 'react'
import {useState} from 'react';

 const AgregarConstructora = ({onAdd}) => {
    const [nombre, setNombre] = useState('')
    const [caldera, setCaldera] = useState('')
    const [activo, setActivo] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();

        if(!nombre){
            alert('introduzca datos');
            return;
        }
        onAdd({nombre, caldera, activo});
        setNombre('');
        setCaldera('');
        setActivo(false);
    }

    return (
        <form className= 'add-form' onSubmit = { onSubmit}>
            <div className= 'form-control'>
                <label>Tecnicos</label>
                <input type= 'text' placeholder='ingrese el nombre del tecnico' value={nombre} onChange= {(e) => setNombre(e.target.value)} />
            </div>
            <div className= 'form-control '>
                <label>Caldera</label>
                <input type= 'text' placeholder='ingrese el tipo de caldera' value={caldera} onChange= {(e) => setCaldera(e.target.value)} />
            </div>
            <div className= 'form-control form-control-check'>
                <label>Activo</label>
                <input type= 'checkbox' checked={activo} value={activo} onChange= {(e) => setActivo(e.currentTarget.checked)} />
            </div>

            <input type= 'submit' value= 'Guardar Caldera' className= 'btn btn-block' />
        </form>
    )
}


export default AgregarConstructora;