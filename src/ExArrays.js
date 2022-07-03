import React from "react";

const ExArrays = () => {
    
    const series = ['Black Mirror', 'This is Us', 'Breaking Bad', 'Rick and Morty']

    const games = ['Playstation', 'Nintendo', 'Microsoft', 'PC']

    return (
        
        <>
        <h1>Exercicios sobre Arrays</h1>
        <ul>
            {series.map((serie) => (
            <li key={serie}>{serie}</li>
            ))}
        </ul>
        ---------------------------------
        <ul>
            {games.map((game) => (
            <li key={game}>{game}</li>
            ))}
        </ul>
        </>

    )

}

export default ExArrays