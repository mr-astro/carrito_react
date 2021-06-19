import React from 'react'; //Importamos react
import {NavItem,Nav,NavbarBrand,Navbar} from 'reactstrap'; //Importamos la barra de navegacion de reactstrap
import Carro from'./Carro.js'; //Importamos el carro para mostrar el icono de compra

//Creamos la clase nevegacion que extiende de React.Component
//para poder usar los metodos de la clase Component de react
class Navegacion extends React.Component{ 
 
    render(){
        //"Navbar" crea la barra de navegacion dandole color y tamaño
        //El atributo "href" te permite redireccionar a la pagina de inicio
        //"ml-auto" quiere decir margin-left que hace que todos los elementos vallan a la izquierda
        //"Carro" trae el icono declarado anterirmente y lo muestra en la barra de navegacion
        return(
            <Navbar color="light" light expand="x1">
                <NavbarBrand href="/">{this.props.titulo}</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Carro/>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }

}
export default Navegacion;
