import React from "react";

const ExEvents = () => {
    
    
    function clicou (event) {
        alert('Clicou')
    }

    function passeMouse (event) {
        console.log('Passando o mouse')
    }

    
    
    return (
        <>
        <p><button onClick={clicou}>Click</button></p>
               
        <p><button onMouseMove={passeMouse}>Passe</button></p>
        </>

    )
}

export default ExEvents