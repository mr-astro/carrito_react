import React from 'react'; //Importamos react
import {Popover,PopoverHeader,PopoverBody,Table,Badge,Button} from 'reactstrap';
import {listaCarrito} from '../listaCarrito.json'; //importamos los productos comprados

//Creamos la clase carro que extiende de React.Component
//para poder usar los metodos de la clase Component de react
class Carro extends React.Component{
    constructor(){
        // Metodo "super()" llama a toda la informacion que hereda
        super();

        // Hace referencia al estado del componente
        this.state={
            popoverOpen:false, // Hace que no se muestre el carrito hasta hacer click sobre el
            listaCarrito
        };
        
        this.toggle=this.toggle.bind(this);
        
    }
    
    //El metodo toggle pone "popoverOpen" en falso para hacer desaparecer el carrito
    toggle(){ 
        
        this.setState(prevState => ({
            popoverOpen: !prevState.popoverOpen
        }));
    }

    render(){
            //Hace un mapeo de listaCarrito y muestra los productos agregados al carrito
            const arregloCarrito = this.state.listaCarrito.map(
                (listaCarrito,i) => {
                    return (
                        <tr key={i}>
                            <td>{(i += 1)}</td>
                            <td>{listaCarrito.titulo}</td>
                            <td>{Intl.NumberFormat().format(listaCarrito.precio)} CLP</td>
                        </tr>
                    );
                }
            )
        
         //Suma de los precios de los productos agregados al carrito
         const totalCarrito = this.state.listaCarrito.reduce(
            (total, listaCarrito) => (total + listaCarrito.precio), 0);

            return(
                //"span" contiene el icono del carrito traido desde google
                //"Badge" le dara un relleno de color distinto al numero de productos
                //"Popover" permite desplegar un cuadro emergente menos invasivo al precionar un boton
                //"Table" permite estructurar una tabla para mostrar los productos agregados al carrito de manera ordenada
                //IsOpen pone a "Popover" en verdadero para mostrar el carrito
                //"placement" indica la forma en que se mostrara el carrito y "bottom" que se ordene en columna   
                <div>
                    <Button id="Popover1" color="info">
                        <span className="material-icons">shopping_cart</span>
                        <Badge color="info">{listaCarrito.length}</Badge>
                    </Button>
                    <Popover target="Popover1" placement="bottom" isOpen={this.state.popoverOpen} toggle={this.toggle}>
                        <PopoverHeader>Listado de compras</PopoverHeader>
                        <PopoverBody>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Producto</th>
                                        <th>Precio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {arregloCarrito}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td><b><em>Total</em></b></td>
                                        <td></td>
                                        <td><em>{Intl.NumberFormat().format(totalCarrito)} CLP</em></td>
                                    </tr>
                                </tfoot>
                            </Table>
                        </PopoverBody>
                    </Popover>
                </div>
            )
    }   
}

export default Carro;