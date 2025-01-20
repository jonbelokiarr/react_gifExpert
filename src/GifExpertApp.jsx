import React from 'react';
import { useState } from 'react';
import { AgregarCategoria, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categorias, setCategorias ] = useState([ 'One Punch' ]);

    const agregarCategoria = (categoria) => {
      if(categorias.includes(categoria)) return;
      setCategorias([ categoria, ...categorias ]);
    }

  return (
    <>
        <h1>Gif Expert</h1>

        <AgregarCategoria onNewCategory={ agregarCategoria }/>

        <ol>
          { 
            categorias.map( ( categoria ) => ( 
              <GifGrid key={ categoria } categoria={ categoria }/> 
            ))
          }
        </ol>
    </>
  )
}
