import LogoLight from "../../assets/logo-light.svg";
import LogoDark from "../../assets/logo-dark.svg";

interface LogoProps {
    theme: "light" | "dark";
}

const Logo: React.FC<LogoProps> = ({ theme }) => {
    return (
        <img
            src={theme === "light" ? LogoLight : LogoDark}
            alt="Logo"
            width={220}
            height={80}
        />
    );
};

export default Logo;