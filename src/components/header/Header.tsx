import { useEffect, useState } from "react";
import "../../styles/header.css";
import "../../styles/utility.css";
import MobileHeader from "./MobileHeader";
import MenuIcon from "../icon/MenuIcon";
import Logo from "../logo/Logo";
import DesktopHeader from "./DesktopHeader";

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const body = document.body;

        body.style.overflow = showMobileMenu ? 'hidden' : '';
        body.style.position = showMobileMenu ? 'fixed' : '';
        body.style.width = showMobileMenu ? '100%' : '';

        return () => {
            body.style.overflow = '';
            body.style.position = '';
            body.style.width = '';
        };
    }, [showMobileMenu]);

    return (
        <header className="container py-sm">
            <nav className="flex items-center justify-between">
                <a href="/">
                    <Logo theme="light" />
                </a>
                <DesktopHeader />
                <div className="mobile-menu">
                    {showMobileMenu ?
                        <MobileHeader setShowMobileMenu={setShowMobileMenu} showMobileMenu={showMobileMenu} />
                        :
                        <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                            <MenuIcon />
                        </span>
                    }
                </div>
            </nav>
        </header>
    )
}