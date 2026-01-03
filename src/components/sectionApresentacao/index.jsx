import CardEvento from "../../cardEvento/index.jsx";
import "./sectionApresentacao_styles.css"

export default function SectionApresentacao({ tema, events }) {
    return (
        <section className="apresentacao_section">
            <h3>{tema.nome}</h3>
            <div className="cards_section_container">
                {
                    events.map((evento) => (
                        <CardEvento key={evento.id} evento={evento} />
                    ))
                }
            </div>
        </section>
    )
};