import React, { useState } from 'react';
import bgDestaque from '../../img/bg-destaque.jpg';
import imagemDestaque from '../../img/image_destaque03.png';
import planejamentoImage from '../../img/Planejamento-Briefing.png';
import LinkButton from '../layout/LinkButton';


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

                    {/* Conteúdo com caixas */}
                    <div className='flex flex-row w-[80vw] h-[70%] mx-auto mb-[150px] gap-6'>
                        {/* Coluna A */}
                        <div className='flex flex-col w-1/4 '>
                            {/* Container principal */}
                            <div
                                className={`bg-white flex flex-col p-7 gap-6 transition-all duration-500
        ${expandedCard === 'A' ? 'max-h-[1000px]' : 'max-h-[900px]'}`}
                            >
                                <img
                                    src={planejamentoImage}
                                    alt="Descrição da Imagem"
                                    className='w-auto'
                                />
                                <h2 className='font-bold font-robotoCondensed text-3xl text-center'>
                                    Planejamento e Briefing
                                </h2>

                                {/* Conteúdo limitado inicialmente */}
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out
        ${expandedCard === 'A' ? 'max-h-[1000px]' : 'max-h-[250px]'}`}>
                                    <p className='text-lg text-balance'>
                                        <strong>Contato inicial:</strong> Nessa fase, é realizada a primeira reunião com o cliente para entender as necessidades, objetivos e expectativas para o site.
                                    </p>
                                    <p className='text-lg text-balance'>
                                        <strong>Definição de escopo:</strong> Coleta de informações sobre o público-alvo, funcionalidades desejadas (e-commerce, blog, área de login etc.) e estilo visual (cores, layout, branding).
                                    </p>
                                    <p className='text-lg text-balance'>
                                        <strong>Wireframes e Sitemap:</strong> Criação de um esboço inicial (wireframe) e a estrutura geral do site (sitemap), organizando a navegação e o conteúdo.
                                    </p>
                                    <p className='text-lg text-balance'>
                                        <strong>Orçamento e prazos:</strong> Definição de custos e prazos do projeto, alinhando expectativas.
                                    </p>
                                </div>

                                {/* Botão Ver Mais / Ver Menos */}
                                <button className='text-orange-500 font-semibold hover:underline self-center' onClick={() => toggleExpansion('A')}> {expandedCard === 'A' ? 'Ver menos' : 'Ver mais'} </button>
                            </div>

                        </div>

                        {/* Coluna B */}
                        <div className='flex flex-col w-1/4'>
                            {/* Container principal */}
                            <div
                                className={`bg-white flex flex-col p-7 gap-6 transition-all duration-400
                                    ${expandedCard === 'B' ? 'max-h-[1000px]' : 'max-h-[900px]'}`}
                            >
                                <img
                                    src={planejamentoImage}
                                    alt="Descrição da Imagem"
                                    className='w-auto'
                                />
                                <h2 className='font-bold font-robotoCondensed text-3xl text-center'>
                                    Design e Prototipação
                                </h2>

                                {/* Conteúdo limitado inicialmente */}
                                <div className={`overflow-hidden transition-all duration-400 ease-in-out
        ${expandedCard === 'B' ? 'max-h-[1000px]' : 'max-h-[250px]'}`}>
                                    <p className='text-lg text-balance'>
                                        <strong>Criação do design visual:</strong> Com base no briefing, são elaborados os protótipos visuais das páginas (geralmente no Figma, Adobe XD etc.), mostrando como o site ficará visualmente.
                                    </p>
                                    <p className='text-lg text-balance'>
                                        <strong>Aprovação do design:</strong> O cliente revisa os protótipos e sugere alterações. Após revisões, o design final é aprovado.
                                    </p>
                                    <p className='text-lg text-balance'>
                                        <strong>Definição de responsividade:</strong> Já nessa fase, o design deve contemplar a adaptação para diferentes dispositivos (desktop, tablet, mobile).
                                    </p>

                                </div>

                                {/* Botão Ver Mais / Ver Menos */}
                                <button className='text-orange-500 font-semibold hover:underline self-center' onClick={() => toggleExpansion('B')}> {expandedCard === 'B' ? 'Ver menos' : 'Ver mais'} </button>
                            </div>
                        </div>

                        {/* Coluna C */}
                        <div className='flex flex-col w-1/4'>
                            {/* Container principal */}
                            <div
                                  className={`bg-white flex flex-col p-7 gap-6 transition-all duration-400
                                    ${expandedCard === 'C' ? 'max-h-[1000px]' : 'max-h-[900px]'}`}
                            >
                                <img
                                    src={planejamentoImage}
                                    alt="Descrição da Imagem"
                                    className='w-auto'
                                />
                                <h2 className='font-bold font-robotoCondensed text-3xl text-center'>
                                    Desenvolvimento
                                </h2>

                                {/* Conteúdo limitado inicialmente */}
                                <div className={`overflow-hidden transition-all duration-400 ease-in-out
        ${expandedCard === 'C' ? 'max-h-[1000px]' : 'max-h-[250px]'}`}>
                                    <p className='text-lg text-balance'>
                                        <strong>Desenvolvimento Front-end:</strong> Codificação das páginas em HTML, CSS, JavaScript, e frameworks como React, Angular ou Vue, tornando o layout funcional.
                                    </p>
                                    <p className='text-lg text-balance'>
                                        <strong>Desenvolvimento Back-end:</strong> Se o site tiver funcionalidades dinâmicas (e-commerce, formulários de contato, sistemas de login), são implementadas no back-end usando linguagens como PHP, Node.js, ou frameworks como Laravel.
                                    </p>
                                    <p className='text-lg text-balance'>
                                        <strong>Testes:</strong> Testes de funcionalidade e responsividade são realizados para garantir que tudo funcione corretamente em diferentes navegadores e dispositivos.
                                    </p>
                                </div>

                                {/* Botão Ver Mais / Ver Menos */}
                                <button className='text-orange-500 font-semibold hover:underline self-center' onClick={() => toggleExpansion('C')}> {expandedCard === 'C' ? 'Ver menos' : 'Ver mais'} </button>
                            </div>
                            {/* <div className='h-[10%]'></div> C4 ocupa 10% */}
                        </div>

                        {/* Coluna D */}
                        <div className='flex flex-col w-1/4'>
                            {/* Container principal */}
                            <div
                                 className={`bg-white flex flex-col p-7 gap-6 transition-all duration-400
                                    ${expandedCard === 'D' ? 'max-h-[1000px]' : 'max-h-[900px]'}`}
                            >
                                <img
                                    src={planejamentoImage}
                                    alt="Descrição da Imagem"
                                    className='w-auto'
                                />
                                <h2 className='font-bold font-robotoCondensed text-3xl text-center'>
                                    Lançamento e Manutenção
                                </h2>

                                {/* Conteúdo limitado inicialmente */}
                                <div className={`overflow-hidden transition-all duration-400 ease-in-out
        ${expandedCard === 'D' ? 'max-h-[1000px]' : 'max-h-[250px]'}`}>
                                    <p className='text-lg text-balance'>
                                        <strong>Apresentação final:</strong> O site completo é apresentado ao cliente para revisões finais e ajustes necessários.
                                    </p>
                                    <p className='text-lg text-balance'>
                                        <strong>Lançamento:</strong> Após a aprovação final, o site é publicado no servidor e domínio do cliente.
                                    </p>
                                    <p className='text-lg text-balance'>
                                        <strong>Manutenção e suporte:</strong> Após o lançamento, é oferecido suporte técnico para corrigir possíveis erros, atualizações de segurança e ajustes contínuos conforme necessidade.
                                    </p>
                                    <p className='text-lg text-balance'>
                                        <strong>Orçamento e prazos:</strong> Definição de custos e prazos do projeto, alinhando expectativas.
                                    </p>
                                </div>

                                {/* Botão Ver Mais / Ver Menos */}
                                <button className='text-orange-500 font-semibold hover:underline self-center' onClick={() => toggleExpansion('D')}> {expandedCard === 'D' ? 'Ver menos' : 'Ver mais'} </button>
                            </div>
                        </div>
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
