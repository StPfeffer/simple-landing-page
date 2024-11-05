import "../../styles/testimonals.css";
import TestimonialsCard from "../card/TestimonialsCard";
import ProfileImageOne from '/elon-ma.png';

const TestimonialsSection = () => {
    return (
        <section id="testimonials">
            <header>
                <p className="desktop-only reverse-color">Conselho de quem conhece</p>
                <h1>Cada cliente importa!</h1>
                <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
            </header>

            <section className="carousel">
                <div className="carousel-content">
                    <TestimonialsCard image={ProfileImageOne} />
                    <TestimonialsCard image={ProfileImageOne} />
                    <TestimonialsCard image={ProfileImageOne} />
                </div>
            </section>
        </section>
    );
};

export default TestimonialsSection;