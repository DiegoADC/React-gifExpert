import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = ( newCategory )=> {
        if(categories.includes(newCategory)) return;

        // console.log(newCategory)
        // categories.push(newCategory);
        // setCategories(categories.push('Valorant'))
        // setCategories(categories.concat('Valorant'));
        setCategories([ newCategory,...categories ]);
        // setCategories( cat => [...cat, 'Valorant']);
    }
  return (
    <>
        <h1>Gif Expert</h1>

        {/* Input */}
        <AddCategory 
        // etCategories={ setCategories } categories={categories}
            onNewCategory={ event => onAddCategory(event)}
        
        />

        {/* Listado de GIFs */}

        
        {
            categories.map( ( category) => (
                <GifGrid key={category} category={category}/>
            ))
        }
    </>
  )
}
