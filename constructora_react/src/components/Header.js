import PropTypes from 'prop-types'
import Boton from './Boton'

const Header = ({title, onAdd, showAdd, showEditar}) => {
    return(
        <header className='header'>
            <h1> {title}</h1>
            <Boton 
            color1 ={showAdd ? 'red' : 'green'} 
            text1={showAdd ? 'Close' : 'Agregar'} 

            color2 ={showEditar ? 'red' : 'orange'} 
            text2={showEditar ? 'Close' : 'Modificar'} 
            
            onClick= {onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Constructoras',
}

export default Header;