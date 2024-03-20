//il faut importer les composants dont on à besoin
import React, { useState} from 'react';

const InputControlled = () => {

    // useState - permet de déclarer et de mettre à jour un état local dans un composant fonctionnel:
    const [prenom , setPrenom] = useState('');
    const[nom, setNom]=useState('');
    
    const changePrenom = (event) => { 
        setPrenom(event.target.value);
    };
    const changeNom =(event)=>{
        setNom(event.target.value);
    };
    return (
        <div>
            <p>Exercice 1 :</p>
            <input placeholder="Votre prénom" value={prenom} onChange={changePrenom}></input>
            <input placeholder="Votre nom" value={nom} onChange={changeNom}></input>
            <p>Bonjour {prenom} {nom}</p>   
        </div>

    );
};

//On donne le composant (ici pour la vue):
export default InputControlled;
