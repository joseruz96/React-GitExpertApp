import { useState, useEffect } from "react"
import { getGifs } from "../helpers/GetGifs";

export const useFitchGifs = (category) => {


    const [state, setState] = useState({
        data: [],
        loading: true
    })


    useEffect(() =>{
        getGifs(category)
            // .then(images => setState(images))
            .then(images => {
                setTimeout(() => {
                    setState({
                        data: images,
                        loading: false
                    }) 
                }, 1000);
    
            });
    }, [category]);


    return state;

}
