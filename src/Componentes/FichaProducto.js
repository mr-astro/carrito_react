import React from 'react'; //Importamos react
import {CardImg,ModalHeader,ModalBody,ModalFooter,Modal,Container,Button} from 'reactstrap';
import './FichaProducto.css';
import './Carro';
import {listaCarrito} from '../listaCarrito'; //Importamos listaCarrito para agregar los productos

//Creamos la clase FichaProducto que extiende de React.Component
//para poder usar los metodos de la clase Component de react
class FichaProducto extends React.Component{
    constructor(props){
        // Metodo "super()" llama a toda la informacion que hereda
        super(props);
        
        // Hace referencia al estado del componente
        this.state = {
            modal: false, // Hace que no se muestre la ficha del producto hasta hacer click en el boton de la ficha
            listaCarrito,
            stock : this.props.props.stock // Se agrega listaCarrito al estado de la FichaProducto
        }

        //"bind" hace que los argumentos recibidos sean compartidos a los demas metodos de la clase
        this.toggle = this.toggle.bind(this);
        this.agregarCarrito = this.agregarCarrito.bind(this);
    }

    //El metodo toggle pone "modal" en el estado anterior para hacer desaparecer la ficha 
    toggle(){
        this.setState(prevState => ({ //Actualiza el estado del componente cuando es procesado y renderizado
            modal: !prevState.modal
        })); 
    }
    //El metodod agregarCarrito agrega un producto al objeto listaCarrito
    agregarCarrito(){
        if(this.state.stock !==0){
            listaCarrito.push({

             //props.props permite filtrar y mostrar solo los argumentos de la ficha del producto
             "titulo" : this.props.props.titulo,
             "precio" : this.props.props.precio,
            });
 
         //Pone "modal" en el estado anterior para hacer desaparecer la ficha
         //una vez agregado el producto al carrito 
            this.setState(prevState => ({
                modal: !prevState.modal,
                stock: prevState.stock-1,
            }));

        }else{
            alert("Stock Insuficiente")
        }

    };
    
    //IsOpen pone a "Modal" en verdadero para mostrar la ficha
    render(){
        return(
            <Container>
                <Button onClick={this.toggle}>Ver Ficha</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>{this.props.props.titulo}</ModalHeader> 
                    <ModalBody>
                        <CardImg src={this.props.props.imagen}/>
                        <p></p>
                        <p><em>El detalle del producto seleccionado es el siguiente: </em></p>
                        {this.props.props.descripcion}
                        <p>Este producto tiene un valor de <b>$ {Intl.NumberFormat().format(this.props.props.precio)}</b> CLP.</p>
                        <p>Hay <b>{this.state.stock}</b> unidades disponibles.</p>
                    </ModalBody>
                    <ModalFooter className="modalFooter">
                        <Button color="primary" onClick={this.agregarCarrito}>Agregar al carrito</Button>
                        <Button color="secondary"onClick={this.toggle}>Volver atras</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        )
    }
}
export default FichaProducto;