import React from 'react';

const joyce = {
    cliente: 'Joyce Helem Gomes de Oliveira',
    idade: 27,
    compras: [
        {nome: 'Notebook', preco: 'R$ 2500'},
        {nome: 'Geladeira', preco: 'R$ 3000'},
        {nome: 'Smartphone', preco: 'R$ 1500'}
    ],
    ativo: true
}

const alex = {
    cliente: 'Alex Gabriel da Silva Miranda',
    idade: 31,
    compras: [
        {nome: 'Notebook', preco: 'R$ 2500'},
        {nome: 'Geladeira', preco: 'R$ 3000'},
        {nome: 'Smartphone', preco: 'R$ 1500'},
        {nome: 'Guitarra', preco: 'R$ 3500'}
    ],
    ativo: false
}

const Ex001 = () => {
    
    const dados = alex

    const total = dados.compras.map((item) => Number(item.preco.replace('R$ ', ''))).reduce((a , b) => a + b)
    
    return (
        <>
        <div style={{fontWeight: 'bold'}}>
            <p>Cliente: {dados.cliente}</p> 
            <p>Idade: {dados.idade}</p>
            <p>Situação: <span style={{color: dados.ativo ? 'green' : 'red'}}>{dados.ativo ? 'Ativo' : 'Inativo'}</span></p>
            <p>Total Gasto: R$ {total}</p>
            <p style={{color: total <= 10000 ? 'green' : 'red'}}>{total <= 10000 ? 'Parabéns você ta em dia com suas contas!' : 'Você está gastando muito!'}</p>
        </div>
        </>
)}

export default Ex001