import React from 'react'

const Texto = ({texto}) => {
    return (
        <>
        <h2>{texto}</h2>
        <p>asudygudwqudasguasudgoihdsagb</p>
        </>
    )
}

const Titulo = ({titulo}) => {
    return <h1 style={{color:'green'}}>{titulo}</h1>
}

const Home = () => {
    return (
        <>
            
            <section>
                <Titulo titulo='Home' />
                {/* <h1>Home</h1> */}
                <p>Essa é a home do site</p>
            </section>
            
        </>
    )
}

const Produtos = () => {
    return (
        <>
        
            <section>
                <Titulo titulo='Produtos' />
                <Texto texto='Aqui é o segundo titulo' />
            </section>

        </>
    )
}

const Header = () => {
    return (
        <>
            <header>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/produtos">Produtos</a>
                </li>
            </header>
        </>
    )
}


// const Produtos = [
//     {nome: 'Notebook', propriedades: '16gb ram', '512gb'},
//     {nome:'SmartPhone', propriedades: '2gb ram', '128gb'}
// ]

export const ExComponents = () => {

    return (
    
        <>

            <Header />
            <Home />
            <Produtos />

        </>

  )
}

export default ExComponents