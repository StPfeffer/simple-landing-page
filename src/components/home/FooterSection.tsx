import "../../styles/footer.css";

const FooterSection = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>Entre em Contato</h3>
                <p>Email: contato@exemplo.com</p>
                <p>Telefone: (11) 1234-5678</p>
            </div>
            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} Km Fácil. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}

export default FooterSection;
