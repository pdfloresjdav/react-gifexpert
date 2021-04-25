import React, {useState,useEffect} from 'react'
//import { getGifs } from '../helpers/getGifs'
import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {
    //const [count, setCount] = useState(0)
   // const [images, setImages] = useState([])
    // useEffect(()=>{
    //     getGifs(category).then(setImages)},[category])
    
    const {data:images, loading} = useFetchGifs(category);
    
    return (
        <>
        <h3>{category}</h3>
        
        { loading && <p>cargando..</p> }
        <div className="card-grid">
            

            {
                    images.map(img=>(
                        <GifGridItem key={img.id} {...img}/>
                    ))
            }

            {/* <h3>{count}</h3> */}
            {/* <button onClick={()=> setCount(count +1)}></button> */}
        </div>
        </>
    )
}
