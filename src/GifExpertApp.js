import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {


    const [categories, setCategories] = useState(['Pokemón']);

    // const hanndleAdd = () => {
    //     setCategories( (categories) => categories.concat('Digimon'));
    //     // setCategories([...categories, 'Detective Connan'])
    // }


    return (
        <>
            <h1>GiExpertApp</h1>
            <hr></hr>
            <AddCategory setCategories={setCategories}/>

            <ol>
                {
                    categories.map(categories =>
                         <GifGrid  
                            key = {categories}
                            category = {categories}
                         />
                    )
                } 
            </ol>

        </>
    )
}; 

export default GifExpertApp;