import "../../styles/pricing.css";
import Container from "../Container";
import PricingCard from "../card/PricingCard";

const PricingSection = () => {
    return (
        <section id="pricing">
            <Container>
                <header>
                    <p className="desktop-only reverse-color">Planos e Preços</p>
                    <h1>Nossos planos</h1>
                </header>

                <div className="even-columns gap-1.5">
                    <PricingCard
                        name="Básico"
                        description="Baixe o ferramenta e comece a utilizar agora mesmo!"
                        price="Grátis"
                        features={["Com anúncios", "Até 10 veículos por dia", "Utilize sem limitação"]}
                    />
                    <PricingCard
                        name="Premium"
                        description="Para quem deseja utilizar nossa ferramenta sem limitações!"
                        price="R$ 19,90"
                        price2="/mês"
                        features={["Sem interrupção de anúncios", "Utilize quantas vezes quiser", "Utilize todos os produtos disponíveis na plataforma"]}
                        premium
                        bonusDescription="1º MÊS GRÁTIS"
                    />
                    <PricingCard
                        name="Empresarial"
                        description="Utilize nossa soiução na sua empresa. Aprimore seu fluxo."
                        price="R$ 12,90"
                        price2="/mês por dev"
                        features={["Com anúncios", "Até 10 veículos por dia", "Utilize sem limitação"]}
                    />
                </div>
            </Container>
        </section>
    );
};

export default PricingSection;