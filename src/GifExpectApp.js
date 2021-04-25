import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpectApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    // const handleAdd = () =>{

    //     //setCategories([...categories,'HunterXHunter']);
    //     setCategories(cats =>[...categories,'HunterXHunter']);
    // }
    return (
        <>
            <h2>GifExpectApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {
                    categories.map(category => (
                    <GifGrid 
                    key={category} 
                    category={category} 
                    />
                    )
                    )
                }
            </ol>

        </>
    )
}
