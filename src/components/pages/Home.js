
import bgDestaque from '../../img/bg-destaque.jpg';
import imagemDestaque from '../../img/image_destaque03.png';
import planejamentoImage from '../../img/Planejamento-Briefing.png';
import Card from '../layout/Card';
import LinkButton from '../layout/LinkButton';
import React, { useState } from 'react';


function Home() {

    // Estado único para armazenar a coluna atualmente expandida
    const [expandedCard, setExpandedCard] = useState(null);

    // Função para alternar a expansão dos cards
    const toggleExpansion = (column) => {
        // Se o card clicado já estiver expandido, recolhe ele, senão expande o novo
        setExpandedCard(expandedCard === column ? null : column);
    };

    return (
        <div className='flex flex-col w-full'>
            {/* Header com imagem de fundo e overlay */}
            <header className="relative flex w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgDestaque})` }}>
                {/* Overlay para aplicar opacidade */}
                <div className="absolute inset-0 bg-[#2e1556] opacity-[90%] z-10"></div>

                {/* Conteúdo principal */}
                <div className="relative z-20 flex w-4/5 mx-auto h-full">
                    {/* Texto e botão à esquerda com posição absoluta */}
                    <div className="absolute left-[10%] top-[40%] transform -translate-y-1/2 z-30 w-[34%] p-4 text-white">
                        <div className='mb-10'>
                            <span className="text-[3vw] md:text-[2.5vw] lg:text-[2vw] leading-tight">
                                <strong>Juntos,</strong> tornamos sua <strong>marca</strong> ainda mais</span>
                            <p className='text-[1vw] md:text-[2vw] lg:text-[4vw] font-extrabold leading-none'>FORTE,</p>
                            <p className='text-[1vw] md:text-[2vw] lg:text-[4vw] font-extrabold leading-none'>COMPETITIVA</p>
                            <p className='text-[1vw] md:text-[2vw] lg:text-[4vw] font-extrabold leading-none'>IMBATÍVEL.</p>
                        </div>
                        <LinkButton className='text-[0.5vw] md:text-[1vw] lg:text-[2vw]' variant='secondary' to="/Sobre" text="Faça já seu Orçamento!" />
                    </div>

                    {/* Imagem à direita */}
                    <div className="w-5/6 ml-auto bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${imagemDestaque})` }}></div>
                </div>
            </header>

            <main>

                <section className="bg-[#644991] h-[1400px] flex flex-col">
                    {/* Cabeçalho e descrição */}
                    <div className='flex flex-col py-32 w-[40vw] mx-auto items-center gap-4 text-center text-white'>
                        <h2 className='text-5xl font-bold'>Processo de Construção</h2>
                        <p className='text-xl'>Cada edifício começa com um conceito e um design. Transforme sua visão em realidade com planejamento e design.</p>
                    </div>

                    {/* Seção Cards*/}
                    <div className='flex flex-row w-[80vw] h-[70%] mx-auto mb-[150px] gap-6'>
                        <Card />
                    </div>
                </section>

                {/* fim seção processos de desenvolvimento */}

                <section>
                    <p>Sobre</p>
                </section>
                <section>
                    <p>Portfólio</p>
                </section>
                <section>
                    <p>Produtos</p>
                </section>
                <section>
                    <p>Fale Conosco</p>
                </section>
            </main>
        </div >
    );
}

export default Home;
