import React, {Component} from 'react';
import Header from './Header';
import Productos from './Productos';
import Footer from './Footer';

class Aplicacion extends Component{


    state = {
        productos: []
    };
    
    componentDidMount() {
        
        const productos = [
            {nombre: 'Bajo Electrico', precio: 1500},
            {nombre: 'Disco Ed. Especial', precio: 800},
            {nombre: 'Audifonos', precio: 100},
            {nombre: 'Laptop', precio: 7000},
            {nombre: 'USB', precio: 150}
        ]
        
        setTimeout(()=> {
            this.setState({
                productos: productos
            });
        }, 3000)
    }

    render(){
        return (
            <div>
                < Header 
                    titulo = 'Nuestra Tienda Virtual'
                />  

                < Productos 
                    productos = {this.state.productos}
                />

                < Footer />
            </div>
        )
    }
}

export default Aplicacion;