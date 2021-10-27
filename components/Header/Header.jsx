import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Search from '../ui/Search/Search';
import Navagation from '../Navegation/Navagation';
import Button from '../ui/Button/Button';

//import context
import { FirebaseContext } from '../../Firebase'
import { auth } from '../../Firebase/firebase'
import { signOut } from 'firebase/auth'
import { async } from '@firebase/util';

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

    const { Firebase, user } = useContext(FirebaseContext);
    const Router = useRouter();
    async function userSignOut() {
        Firebase.SignOut()
        //await signOut(auth)
        //Router.push('/login')
    }

    return (
        <header
            css={css`
                border: 2px solid var(--gris3);
                padding: 2rem 0;
            `
            }
        >
            <Container >
                <div
                    css={css`
                    display: flex;
                    align-items: center;
                `}
                >
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
                                Hola : {user.displayName}
                            </p>
                            <Button
                                type='button'
                                onClick={() => userSignOut()}
                            >
                                Cerrar sesion
                            </Button>
                        </>
                        
                        ) : (
                        <>
                            <Link href='/login'>
                                <Button bgColor={true} >Login</Button>
                            </Link>
                            <Link href='/crear-cuenta'>
                                <Button>Crear cuenta</Button>
                            </Link>
                        </>)
                    }
                    
                    
                </div>
            </Container >
        </header>
    )
}

export default Header
