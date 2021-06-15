import React from 'react'
import Main from '../templates/Main'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <Main icon="home" title="Início"
        subtitle="Segundo Projeto do capitulo de React.">
        <div className="display-4">Bem vindo!</div>
        <hr />
        <p className="mb-0">Sistema para exemplificar a contrução de um cadastro desenvolvido em React!</p>
    </Main>