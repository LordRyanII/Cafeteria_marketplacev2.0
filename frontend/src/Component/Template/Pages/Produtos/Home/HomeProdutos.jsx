import React from 'react';
import Header from '../../../Header/Header';
import Nav from '../../../Nav/Nav';
import Conteudo from './Conteudo';


function listaProdutos(){
    return(
        <main>
            <Header/>
            <Nav />
            <Conteudo />
        </main>
    )
}

export default listaProdutos