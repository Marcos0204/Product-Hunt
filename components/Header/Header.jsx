import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Search from '../ui/Search/Search';
import Navagation from '../Navegation/Navagation';
import Button from '../ui/Button/Button';

///styles components

const Container = styled.div`
    max-width: 1200px;
    width: 95%;
    height: auto  !important;
    margin: 0 auto;
    @media (min-width:768px) {
        display: flex;
        justify-content: space-between;
    }
`

const Logo = styled.a`
    color: var(--naranja);
    font-size: 3rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
    cursor: pointer;
`;



const Header = () => {

    const user = false;

    return (
        <header
            css={css`
                border: 2px solid var(--gris3);
                padding: 2rem 0;
            `
            }
        >
            <Container >
                <div>
                    <Link href='/'>
                        <Logo>P</Logo>
                    </Link>
                    <Search />
                    <Navagation />
                </div>
                <div
                    css={css`
                        display: flex;
                        align-items: center;
                    `}
                >
                    {user ? (
                        <>
                            <p
                                css={css`
                                    margin-right: 2rem;
                                `}
                            > 
                                Hola : Marcos
                            </p>
                            <Button type='button'>Cerrar sesion</Button>
                        </>
                        
                        ) : (
                        <>
                            <Link href='/'>
                                <Button bgColor={true} >Login</Button>
                            </Link>
                            <Link href='/'>
                                <Button>Cerrar secion</Button>
                            </Link>
                        </>)
                    }
                    
                    
                </div>
            </Container >
        </header>
    )
}

export default Header
