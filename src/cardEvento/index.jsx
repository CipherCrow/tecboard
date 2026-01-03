import './cardEvento_styles.css'

export default function CardEvento({ evento }) {
    return (
        <div className="card_evento">
            <div className="card_evento_imagem">
                <img src={evento.imagem} alt={'Imagem do evento: '+evento.nome} />
            </div>
            <div className="card_evento_corpo">
                <span className="tema_evento">{evento.tema.nome}</span>
                <span className="data_evento">
                    {evento.data.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                </span>  
                <h4>{evento.nome}</h4>
                <p className="descricao_evento">
                    {evento.descricao}
                </p>
            </div>
        </div>
    )
}