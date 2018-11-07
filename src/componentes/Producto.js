import React, {Component} from 'react';

class Producto extends Component {
    render(){
        let {nombre, precio} = this.props.producto; 
        return(
            <div>
                <h3>{nombre}</h3>
                <p>${precio}</p>
                {console.log(this.props)}
            </div>
        )
    }
}

export default Producto;