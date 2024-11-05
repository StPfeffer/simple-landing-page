import StarIcon from '../icon/StarIcon';
import StarOuterIcon from '../icon/StarOuterIcon';

interface TestimonialsCardProps {
    image: string;
}

export default function TestimonialsCard({ image } : TestimonialsCardProps) {
    return (
        <div className="carousel-card p-4 shadow-lg rounded-lg text-center space-y-4">
            <img
                src={image}
                alt="Imagem perfil cliente"
                className="mx-auto rounded-full w-24 h-24"
            />

            <span className="testimony block text-gray-700">
                <p>
                    Certamente o mercado chinês de elétricos está bombando, só existe uma coisa melhor do que isso,
                    provar uma boa comida DonaFrost no almoço.
                </p>
            </span>

            <span className="rating flex justify-center space-x-1">
                <StarIcon width={22} height={20} />
                <StarIcon width={22} height={20} />
                <StarIcon width={22} height={20} />
                <StarIcon width={22} height={20} />
                <StarOuterIcon width={22} height={20} />
            </span>

            <span className="names block text-gray-600">
                <p className="font-semibold">Ellon Ma</p>
                <p className="text-sm">CEO BING CHILLING</p>
            </span>
        </div>
    );
};

