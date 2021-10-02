import Constructoras from "./Constructoras"
import {FaTimes} from 'react-icons/fa';

 const Constructora = ({constructora, onDelete, onToggle}) => {
    return (
        <div className={`constructora ${constructora.reminder ? 'reminder': ''}`} onDoubleClick={() => onToggle(constructora.id)}>
            <h3>{constructora.nombre} <FaTimes style= {{color: 'red', cursor: 'pointer'}} onClick= {() => onDelete(constructora.id)} /></h3>
            <h3>{constructora.constructora}</h3>
        </div>
    )
}

export default Constructora