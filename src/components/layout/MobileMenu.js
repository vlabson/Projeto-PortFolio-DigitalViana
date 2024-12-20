import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Botão de menu hambúrguer */}
            <button
                className="text-white text-3xl focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>

            {/* Menu que aparece ao clicar no botão */}
            <div className={`${isOpen ? 'block' : 'hidden'} absolute right-0 top-full mt-2 bg-[#2e1556] p-4 rounded-lg shadow-lg`}>
                <ul className="flex flex-col space-y-4">
                    <li>
                        <Link to="/" className="text-white hover:text-[#eb680b]" onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/sobre" className="text-white hover:text-[#eb680b]" onClick={() => setIsOpen(false)}>Sobre</Link>
                    </li>
                    <li>
                        <Link to="/PorteFolio" className="text-white hover:text-[#eb680b]" onClick={() => setIsOpen(false)}>Portfólio</Link>
                    </li>
                    <li>
                        <Link to="/produtos" className="text-white hover:text-[#eb680b]" onClick={() => setIsOpen(false)}>Produtos</Link>
                    </li>
                    <li>
                        <Link to="/faleconosco" className="text-white hover:text-[#eb680b]" onClick={() => setIsOpen(false)}>Fale Conosco</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MobileMenu;
