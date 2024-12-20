import React from 'react';
import { Link } from 'react-router-dom';

function DesktopMenu() {
    return (
        <ul className="flex space-x-8">
            <li>
                <Link to="/" className="text-white hover:text-[#eb680b]">Home</Link>
            </li>
            <li>
                <Link to="/sobre" className="text-white hover:text-[#eb680b]">Sobre</Link>
            </li>
            <li>
                <Link to="/PorteFolio" className="text-white hover:text-[#eb680b]">Portfólio</Link>
            </li>
            <li>
                <Link to="/produtos" className="text-white hover:text-[#eb680b]">Produtos</Link>
            </li>
            <li>
                <Link to="/faleconosco" className="text-white hover:text-[#eb680b]">Fale Conosco</Link>
            </li>
        </ul>
    );
}

export default DesktopMenu;
