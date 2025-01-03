import React, { useState } from 'react';
import planejamentoImage from '../../img/Planejamento-Briefing.png';

function Card() {

     // Estado único para armazenar a coluna atualmente expandida
     const [expandedCard, setExpandedCard] = useState(null);

     // Função para alternar a expansão dos cards
     const toggleExpansion = (column) => {
         // Se o card clicado já estiver expandido, recolhe ele, senão expande o novo
         setExpandedCard(expandedCard === column ? null : column);
     };

    return (
        <>
            {/* Coluna A */}
            < div className='flex flex-col w-1/4 ' >
                {/* Container principal */}
                < div className={` group bg-white flex flex-col p-7 gap-6 transition-all duration-500 hover:bg-orange-100 ${expandedCard === 'A' ? 'max-h-[1000px]' : 'max-h-[900px]'}`
                }
                >
                    <img
                        src={planejamentoImage}
                        alt="Descrição da Imagem"
                        className='w-auto'
                    />
                    <h2 className='font-bold font-robotoCondensed text-3xl text-center transition-colors duration-500 group-hover:text-orange-600 group-hover:text-[31px]'>
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
                    <button className='text-orange-500 font-semibold hover:underline self-center  transition-all duration-300 group-hover:underline group-hover:border group-hover:border-orange-500 group-hover:rounded-md px-4 py-2' onClick={() => toggleExpansion('A')}> {expandedCard === 'A' ? 'Ver menos' : 'Ver mais'} </button>
                </div >

            </div >
            {/* Coluna B */}
            <div className='flex flex-col w-1/4'>
                {/* Container principal */}
                <div
                    className={`group bg-white flex flex-col p-7 gap-6  transition-all duration-500 hover:bg-orange-100
                                    ${expandedCard === 'B' ? 'max-h-[1000px]' : 'max-h-[900px]'}`}
                >
                    <img
                        src={planejamentoImage}
                        alt="Descrição da Imagem"
                        className='w-auto'
                    />
                    <h2 className='font-bold font-robotoCondensed text-3xl text-center transition-colors duration-500 group-hover:text-orange-600 group-hover:text-[31px]'>
                        Design e Prototipação
                    </h2>

                    {/* Conteúdo limitado inicialmente */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out
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
                    <button className='text-orange-500 font-semibold hover:underline self-center  transition-all duration-300 group-hover:underline group-hover:border group-hover:border-orange-500 group-hover:rounded-md px-4 py-2' onClick={() => toggleExpansion('B')}> {expandedCard === 'B' ? 'Ver menos' : 'Ver mais'} </button>
                </div>
            </div>

            {/* Coluna C */}
            <div className='flex flex-col w-1/4'>
                {/* Container principal */}
                <div
                    className={`group bg-white flex flex-col p-7 gap-6  transition-all duration-500 hover:bg-orange-100
                                    ${expandedCard === 'C' ? 'max-h-[1000px]' : 'max-h-[900px]'}`}
                >
                    <img
                        src={planejamentoImage}
                        alt="Descrição da Imagem"
                        className='w-auto'
                    />
                    <h2 className='font-bold font-robotoCondensed text-3xl text-center transition-colors duration-500 group-hover:text-orange-600  group-hover:text-[31px]'>
                        Desenvolvimento
                    </h2>

                    {/* Conteúdo limitado inicialmente */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out
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
                    <button className='text-orange-500 font-semibold hover:underline self-center  transition-all duration-300 group-hover:underline group-hover:border group-hover:border-orange-500 group-hover:rounded-md px-4 py-2' onClick={() => toggleExpansion('C')}> {expandedCard === 'C' ? 'Ver menos' : 'Ver mais'} </button>
                </div>
                {/* <div className='h-[10%]'></div> C4 ocupa 10% */}
            </div>

            {/* Coluna D */}
            <div className='flex flex-col w-1/4'>
                {/* Container principal */}
                <div
                    className={`group bg-white flex flex-col p-7 gap-6  transition-all duration-500 hover:bg-orange-100
                                    ${expandedCard === 'D' ? 'max-h-[1000px]' : 'max-h-[900px]'}`}
                >
                    <img
                        src={planejamentoImage}
                        alt="Descrição da Imagem"
                        className='w-auto'
                    />
                    <h2 className='font-bold font-robotoCondensed text-3xl text-center transition-colors duration-500 group-hover:text-orange-600 group-hover:text-[31px]'>
                        Lançamento e Manutenção
                    </h2>

                    {/* Conteúdo limitado inicialmente */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out
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
                    <button className='text-orange-500 font-semibold hover:underline self-center  transition-all duration-300 group-hover:underline group-hover:border group-hover:border-orange-500 group-hover:rounded-md px-4 py-2' onClick={() => toggleExpansion('D')}> {expandedCard === 'D' ? 'Ver menos' : 'Ver mais'} </button>
                </div>
            </div>
        </>
    )

}

export default Card;