import React from 'react'; //Importamos react
import {CardText,CardSubtitle,CardTitle,CardImg,CardBody,Col,Card} from 'reactstrap';
import './Producto.css';
import FichaProducto from './FichaProducto';

//Creamos la clase Producto que extiende de React.Component
//para poder usar los metodos de la clase Component de react
class Producto extends React.Component{
    render(){
        return(
            <Col sm="6">
                <Card className="Card" body outline color="primary">
                    <CardImg src={this.props.imagen} />
                    <CardBody>
                        <CardTitle><b><u>{this.props.titulo}</u></b></CardTitle>
                        <CardSubtitle><b>Valor: $ </b>{Intl.NumberFormat().format(this.props.precio)} CLP</CardSubtitle>
                        <CardText> {this.props.descripcion} </CardText>
                        <FichaProducto props={this.props}/>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default Producto;