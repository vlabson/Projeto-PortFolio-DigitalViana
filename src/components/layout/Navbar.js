import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import logo from '../../img/logodigitalviana_laranja.png';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    // Função para lidar com o scroll da página
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full p-4 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#2e1556]/80' : 'bg-transparent'}`}>
            <nav>
                <Container>
                    <div className="flex flex-row w-[1200px] max-md:mx-[20px] justify-between mx-auto">
                        <Link to="/">
                            <img className="w-[120px]" src={logo} alt="Digital Viana" />
                        </Link>

                        {/* Menu de Desktop */}
                        <div className="hidden md:block">
                            <DesktopMenu />
                        </div>

                        {/* Menu Mobile */}
                        <div className="md:hidden">
                            <MobileMenu />
                        </div>
                    </div>
                </Container>
            </nav>
        </header>
    );
}

export default Navbar;
