//il faut importer les composants que l'on veut intégrer pour pouvoir les utiliser
import React, { useState} from 'react';


    const Compteur = () => {
        const [count , setCount]=useState(0);

        const increment = () =>  {
            setCount( count + 1 );
        };

        return(
            <div>
                <button type="button" onClick={increment}>Compteur = {count} </button>
            </div> 
        );
    };
    
    

//On donne le composant (ici pour la vue):
export default Compteur;
