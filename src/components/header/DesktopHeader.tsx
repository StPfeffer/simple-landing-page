import Button from "../Button";
import RightArrowIcon from "../icon/RightArrowIcon";
import MenuItem from "./MenuItem";

const DesktopHeader = () => (
    <>
        <div className="desktop-only">
            <ul className="flex gap-1">
                <MenuItem href="#" text="Home" />
                <MenuItem href="#solution" text="Soluções" />
                <MenuItem href="#testimonials" text="Depoimentos" />
                <MenuItem href="#pricing" text="Preços" />
                <MenuItem href="#contact" text="Contato" />
            </ul>
        </div>

        <div className="desktop-only">
            <div className="flex items-center">
                <a className="reverse-color ml-lg" href="">Login</a>
                <Button text="Cadastre-se" icon={<RightArrowIcon color="white" />} />
            </div>
        </div>
    </>
)

export default DesktopHeader;
