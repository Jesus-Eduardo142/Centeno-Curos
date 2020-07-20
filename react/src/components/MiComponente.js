import React, {Component} from 'react';

class MiComponente extends Component{
    render(){
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamón Cocido'],
            calorías: 400
        };

        return(
            <div className="componente">
                <h1>{'Receta: ' + receta.nombre}</h1>
                <h2>{'Calorías:' + receta.calorías}</h2>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente,i)=>{
                            console.log(ingrediente);
                            return(
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            )
                        })
                    }
                </ol>
                <hr></hr>
            </div>
        );
    }

}

export default MiComponente;
