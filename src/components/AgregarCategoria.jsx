import { useState } from "react";

export const AgregarCategoria = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState( 'One Punch' );

    const onInputChange = (event) => {
        setInputValue( event.target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if(event.target.value < 1) return;

        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar GIFs..."
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
        
    )
}
