//il faut importer les composants que l'on veut intégrer pour pouvoir les utiliser
import React, { useState} from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {

    
    return (
        <div>
            <h2>Je suis le composant Parent</h2>
            <ChildComponent message="Message du Parent"/>
        </div>

    );
};
   

//Il faut exporter le composant pour pouvoir l'utiliser ailleurs (ici pour la vue):
export default ParentComponent;
// Le composant ParentComponent  affichera msg et passera une prop au composant enfant. 

// Le composant ChildComponent affichera la prop passée par le composant parent.