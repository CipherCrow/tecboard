import "./sectionApresentacao_styles.css"

export default function SectionApresentacao({ section }){
    return(
        <section className="apresentacao_section">
            <h3>{section.nome}</h3>

            <ul className="apresentacao_section_cards">
                <li className="apresentacao_section_card">Card 1</li>
                <li className="apresentacao_section_card">Card 2</li>
                <li className="apresentacao_section_card">Card 3</li>
            </ul>
        </section>
    )
};