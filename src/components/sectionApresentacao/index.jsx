import CardEvento from "../../cardEvento/index.jsx";
import "./sectionApresentacao_styles.css"

// Dados simulados de eventos para demonstração. O ideal seria que o front já trouxesse do back os eventos relacionados a cada tema.
const eventos = [
    { id: 3, tema: { id: 1, nome: 'Front-end' }, imagem: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_3.png', data: new Date(), nome: 'Pixel & Code', descricao: 'Valorizando e impulsionando a participação feminina no desenvolvimento front-end.' },
    { id: 10, tema: { id: 4, nome: 'Inteligência Artificial' }, imagem: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_10.png', data: new Date(), nome: 'IA Segura e Acessível', descricao: 'Palestra sobre segurança e inclusão em soluções baseadas em inteligência artificial.' },
    { id: 15, tema: { id: 6, nome: 'Cloud Computing' }, imagem: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_15.png', data: new Date(), nome: 'Mundo Cloud', descricao: 'Encontro de especialistas e entusiastas para discutir novidades da tecnologia cloud.' },
    { id: 11, tema: { id: 5, nome: 'Data Science' }, imagem: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_11.png', data: new Date(), nome: 'Data Revolution', descricao: 'Palestra sobre últimas tendências em big data, análise e inteligência empresarial.' },
    { id: 4, tema: { id: 2, nome: 'Back-end' }, imagem: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_4.png', data: new Date(), nome: 'Back-End Masters', descricao: 'Performance e inovação no back-end, conectando especialistas e entusiastas.' },
    { id: 5, tema: { id: 4, nome: 'Inteligência Artificial' }, imagem: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_5.png', data: new Date(), nome: 'Deep Learning Days', descricao: 'Imersão sobre IA, redes neurais e aprendizado profundo.' },
    { id: 12, tema: { id: 5, nome: 'Data Science' }, imagem: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_12.png', data: new Date(), nome: 'Driven by Data', descricao: 'Minicurso sobre como dados impulsionam decisões e inovações para o futuro.' },
    { id: 6, tema: { id: 2, nome: 'Back-end' }, imagem: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_6.png', data: new Date(), nome: 'Code to Core', descricao: 'Workshop que explora a essência do back-end, escalabilidade e boas práticas.' },
    { id: 2, tema: { id: 3, nome: 'Devops' }, imagem: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_2.png', data: new Date(), nome: 'DevOps Evolution', descricao: 'Congresso sobre automação, CI/CD, cultura DevOps, tendências e inovações.' },
    { id: 14, tema: { id: 6, nome: 'Cloud Computing' }, imagem: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_14.png', data: new Date(), nome: 'SkyTech Summit', descricao: 'Palestra sobre tendências em computação em nuvem, escalabilidade e infraestrutura.' },
    { id: 7, tema: { id: 2, nome: 'Back-end' }, imagem: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_7.png', data: new Date(), nome: 'Server Side Summit', descricao: 'Evento dedicado a tecnologias e estratégias para desenvolvimento back-end.' },
    { id: 13, tema: { id: 5, nome: 'Data Science' }, imagem: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_13.png', data: new Date(), nome: 'SQL Summit', descricao: 'Ciclo de palestras com especialistas do universo dos bancos de dados SQL.' },
    { id: 8, tema: { id: 4, nome: 'Inteligência Artificial' }, imagem: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_8.png', data: new Date(), nome: 'IA na palma da mão', descricao: 'Workshop IA em dispositivos móveis, aplicando a tecnologia em soluções acessíveis.' },
    { id: 9, tema: { id: 5, nome: 'Data Science' }, imagem: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_9.png', data: new Date(), nome: 'Data Pulse', descricao: 'Congresso sobre dados nas decisões estratégicas, análise e inovações da ciência de dados.' },
    { id: 1, tema: { id: 1, nome: 'Front-end' }, imagem: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png', data: new Date(), nome: 'Mulheres no Front', descricao: 'Valorizando e impulsionando a participação feminina no desenvolvimento front-end.' }
];

function filtrarEventosPorTema(temaId) {
    return eventos.filter(evento => evento.tema.id === temaId);
}

export default function SectionApresentacao({ section }) {
    return (
        <section className="apresentacao_section">
            <h3>{section.nome}</h3>
            <div className="cards_section_container">
                {
                    filtrarEventosPorTema(section.id).map((evento) => (
                        <CardEvento key={evento.id} evento={evento} />
                    ))
                }
            </div>
        </section>
    )
};