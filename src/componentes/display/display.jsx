import React from 'react'
import './style.css'

function Display(props){
    return (
        <div className = 'containerDisplay'>
            <p className = 'numeros'>{props.numero1} {props.operador} {props.numero2}</p>
            <p className = 'resultado'>{props.resultado}</p>
        </div>
    )
}

export default Display