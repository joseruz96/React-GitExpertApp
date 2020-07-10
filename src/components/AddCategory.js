import React, { useState } from 'react';
import PropType from 'prop-types';

export const AddCategory = ({setCategories}) => {


    const [inputValue, setInputValue] = useState('');


    //PERMITE MODIFICAR EL VALOR DEL FORMULARIO
    const handleInputChange = (evento) => {

        setInputValue(evento.target.value);

    }


    const handleSubmit = (evento) => {

        evento.preventDefault(); 
        if (inputValue.trim().length > 1){
            // setCategories( (categories) => categories.concat(inputValue));}
            setCategories((category => [inputValue, ...category,]))
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Category</h2>
            <input
                type="text"
                value = {inputValue}
                //PERMITE MODIFICAR EL VALOR DEL FORMULARIO
                onChange = {handleInputChange}
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropType.func.isRequired
};