import {Fragment } from 'react';
import Lista from './lista.jsx';


function item({nome, onDelete}) {
    return (
        <>
            <div>
                nome: {nome} <br/>
                <button>Editar</button>
                <button onClick={onDelete}>Remover</button>
            </div> 
            <br/>
            


        </>
    )
}

export default item;
