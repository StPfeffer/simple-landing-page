interface MenuItemProps {
    href: string;
    text: string;
    reverseColor?: boolean;
}

const MenuItem = ({ href, text, reverseColor }: MenuItemProps) => (
    <li>
        <a className={reverseColor ? "reverse-color" : ""} href={href}>{text}</a>
    </li>
)

export default MenuItem;
