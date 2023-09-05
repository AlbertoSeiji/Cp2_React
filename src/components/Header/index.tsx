import React from 'react'

import{ Container } from './styles'

const Header: React.FC = () => {
    return(
        <Container>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Produtos">Produtos</a></li>
                    <li><a href="/Editar/Produtos">Editar Produtos</a></li>
                </ul>
            </nav>
        </Container>
    )
}
export { Header }