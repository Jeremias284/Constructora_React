import Constructora from "./Constructora";
const Constructoras = ({constructoras, onDelete, onToggle}) => {
    return (
        <>
            {constructoras.map((constructora, index) => (
            <Constructora key={index} 
            caldera={constructora} 
                  onDelete={onDelete}  
                  onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Constructoras;