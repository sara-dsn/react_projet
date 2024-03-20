import React, {useState} from 'react';

const Liste=()=> {
    const [liste , setListe]=useState([]);
    const [element , setElement]=useState('');

    const Ajout= (event)=>{
        if(element.trim() !=''){
            setListe([...liste,element]);
            setElement('');
        }
    };
    const nouveau = (event)=>{
        setElement(event.target.value);
    };
    
    
    return(
        <div>
            <input type="text" placeholder="Élement à ajouter..." value={element} onChange={nouveau}></input>
            <button type="submit" onClick={Ajout}>Ajouter</button>
            {liste.map((element, index) =>(
                <div key={index}>{element}</div>
            ))}
        </div>
    );
};
export default Liste;