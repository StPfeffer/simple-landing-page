import { IconProps } from "../../types/IconProps";

const PinIcon: React.FC<IconProps> = ({
    color = "#EE6C4D",
    size = 24
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M20.2 10.6C20.2 17.8 10.6 25 10.6 25C10.6 25 1 17.8 1 10.6C1 8.05392 2.01143 5.61212 3.81178 3.81178C5.61212 2.01143 8.05392 1 10.6 1C13.1461 1 15.5879 2.01143 17.3882 3.81178C19.1886 5.61212 20.2 8.05392 20.2 10.6Z"
            stroke={color} />
        <path d="M10.6 14.2C12.5882 14.2 14.2 12.5882 14.2 10.6C14.2 8.61178 12.5882 7 10.6 7C8.61178 7 7 8.61178 7 10.6C7 12.5882 8.61178 14.2 10.6 14.2Z"
            stroke={color} />
    </svg>
);

export default PinIcon;
