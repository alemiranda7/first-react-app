import React from 'react'

const titulo = <h1>Titulo com variavel</h1>
const random = Math.random()


const App = () => {
    
    return (
        <>
        {titulo}
        
        <p className='random1' title='numero multiplicado por 100'>{random * 100}</p>

        <p className='random2' title='numero gerado aleatorio com titulo'>{random}</p>
        
        <p className='corpoText'> 
            <a href="/"> aqui é o corpo do texto</a>
        </p>
        </>
    )
}

export default App