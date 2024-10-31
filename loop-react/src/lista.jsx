import Item from './item.jsx';
import {Fragment } from 'react';

function lista({lista, onDelete})
{
    return lista.map((nomeDaMarca, index) => {
        return (
            <Item nome={nomeDaMarca} key={index}  onDelete={() => onDelete(index)}></Item>
        )
      })

}

export default lista;
