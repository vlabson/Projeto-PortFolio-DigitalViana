import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Container from './Container';
import { Link } from 'react-router-dom';
import logo from "../../img/logodigitalviana_laranja.png"

function Footer() {
    return (
        <>
            <footer className="flex flex-col justify-between bg-[#2e1556] p-4">
                <Container>
                    <div className="w-[800px] mx-auto flex justify-between items-center">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <Link to={"/"}>
                                <img className="w-[120px]" src={logo} alt="Digital Viana" />
                            </Link>
                            <p>slogan aqui e aqui</p>
                            <ul className="flex list-none gap-4 text-white text-lg">
                                <li className="hover:text-[#eb680b] cursor-pointer"><FaInstagram /></li>
                                <li className="hover:text-[#eb680b] cursor-pointer"><FaFacebook /></li>
                                <li className="hover:text-[#eb680b] cursor-pointer"><FaLinkedin /></li>
                            </ul>
                        </div>

                        <div>
                            <ul className="flex list-none items-center">
                                <li className="mr-4">
                                    <Link to={"/"} className="font-poppins text-[15px] text-white no-underline hover:text-[#eb680b]">Home</Link>
                                </li>
                                <li className="mr-4">
                                    <Link to={"/sobre"} className="font-poppins text-[15px] text-white no-underline hover:text-[#eb680b]">Sobre</Link>
                                </li>
                                <li className="mr-4">
                                    <Link to={"/PorteFolio"} className="font-poppins text-[15px] text-white no-underline hover:text-[#eb680b]">Portfólio</Link>
                                </li>
                                <li className="mr-4">
                                    <Link to={"/produtos"} className="font-poppins text-[15px] text-white no-underline hover:text-[#eb680b]">Produtos</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </footer>

            <div className="p-2 text-xs text-white bg-[#1c0d35] flex justify-center">
                <p>Copyright Digital Viana &copy; 2024 - Todos os direitos reservados. Todo o conteúdo deste site, como textos, imagens e logotipos, é propriedade da Digital Viana</p>
            </div>
        </>
    )
}

export default Footer;
