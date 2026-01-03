import "./header_styles.css"

export default function Header() {
    return (
        <section className="header_container">
            <header className="header">
                <img src="./logo.png" alt="" />
            </header>
            <section className="header_banner">
                    <img src="./banner.png" alt="" />
            </section>
        </section>
    )
}