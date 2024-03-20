// on importe le paquet nécessaire pour pouvoir écrire en react:
import React from 'react';

//  Props sert à faire une entité provenant d'un autre composant (entité tel que string , init, array , function ...)
const ChildComponent = (props) => {
    return <p>{props.message}</p>;
};

export default ChildComponent;
// Le composant ParentComponent  affichera msg et passera une prop au composant enfant. 

// Le composant ChildComponent affichera la prop passée par le composant parent.