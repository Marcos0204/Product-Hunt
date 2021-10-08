import React from 'react';
import Search from '../ui/Search/Search';
import Navagation from '../Navegation/Navagation';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Header = () => {
    return (
        <header
            css={css`
                border: 2px solid var(--gris3);
                padding: 1rem 0;
            `
            }
        >
            <div>
                <div>
                    <p>P</p>
                    <Search />
                    <Navagation />
                </div>
                <div>
                    <p>Hola : Marcos</p>
                    <button type='button'>Cerrar sesion</button>
                    <Link href='/'>Login</Link>
                    <Link href='/'>Cerrar secion</Link>
                </div>
            </div>
        </header>
    )
}

export default Header
