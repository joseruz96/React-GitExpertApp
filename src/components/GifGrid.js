import React from 'react'
import { useFitchGifs } from '../hooks/useFitchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


    const {data:images, loading} = useFitchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__zoomInDown">{category}</h3>
            <div className="card-grif">

                {loading && <p className="animate__animated animate__flip">Cargando...</p>}


                {
                    
                    images.map(img => <GifGridItem 
                        key = {img.id}
                        {...img}
                    />)
                    
                }

                

            </div>
        </>
    )
}
