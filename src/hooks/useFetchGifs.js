import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( categoria ) => {
    const [imagenes, setImagenes] = useState([]);

    const [isLoading, setIsLoading] = useState( true );

    const getImagenes = async() => {
        setImagenes( await getGifs( categoria ) );
        setIsLoading( false );
    }

    useEffect( () => {
        getImagenes();
    }, [] )

  return ( {
    imagenes,
    isLoading
  })
}
