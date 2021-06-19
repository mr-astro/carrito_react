import React from 'react'; //Importamos React
import Producto from './Componentes/Producto.js'; //Importamos los productos
import './App.css';
import {Container,Row} from 'reactstrap';
import Navegacion from './Componentes/Navegacion.js'; // Importamos la barra de navegacion
import {listaProductos} from './listaProductos.json'; // Importamos el listado de productos creado en Json

//Creamos la clase App que extiende de React.Component
//para poder usar los metodos de la clase Component de react
class App extends React.Component {
  constructor(){
    // Metodo "super()" llama a toda la informacion que hereda
    super();

    // Fijamos el estado del componente con la lista de productos 
    this.state = {
      listaProductos
    };
  }

  //"arregloComponentes" construye un mapeo del Json "listaProducto" guardandolo en un nuevo array
  //El metodo "map" va a recibir la listaProductos del Json y el indice de cada iteracion
  //Key permite asignarle una clave unica a cada objeto dentro del array "arregloComponente" para identificarlo dentro de sus promps
  render() {
    const arregloComponentes = this.state.listaProductos.map(
      (listaProductos,i) => {
        return(
          <Producto
          key={i}
          titulo={listaProductos.titulo}
          imagen={listaProductos.imagen}
          descripcion={listaProductos.descripcion}
          precio={listaProductos.precio}
          stock={listaProductos.stock}
          />
        )
      }
    );
      return (
        //Mostramos la barra de navegacion creada en Navegacion.js
        <Container>
          <Navegacion titulo="Mi primer Desafio en React"/>
          <Row>
             {arregloComponentes} 
          </Row>
        </Container>
      )
     }
}

export default App;
