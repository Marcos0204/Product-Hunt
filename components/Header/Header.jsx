import React from 'react';
import Search from '../ui/Search/Search';
import Navagation from '../Navegation/Navagation';
import Link from 'next/link';

const Header = () => {
    return (
        <header>
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
