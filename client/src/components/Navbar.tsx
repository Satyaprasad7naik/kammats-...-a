import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link, useLocation } from "react-router-dom";
import { getImage } from '../utils/media';
import NavMenu from "./NavMenu";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === "/" || location.pathname === "";

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    useGSAP(() => {
        const els = Array.from(document.querySelectorAll<HTMLElement>(".nav-logo, .menu-hover"));
        if (!els.length) return;

        const disposers: Array<() => void> = [];

        els.forEach((el) => {
            const onMove = (e: MouseEvent) => {
                const b = el.getBoundingClientRect();
                const x = e.clientX - b.left;
                const y = e.clientY - b.top;
                const offsetX = (x / b.width - 0.5) * 10; // ±5px
                const offsetY = (y / b.height - 0.5) * 10; // ±5px
                gsap.to(el, { x: offsetX, y: offsetY, scale: 1.2, duration: 0.25, ease: "power2.out" });
            };

            const onLeave = () => gsap.to(el, { x: 0, y: 0, scale: 1, duration: 0.35, ease: "power3.out" });

            el.addEventListener("mousemove", onMove);
            el.addEventListener("mouseleave", onLeave);

            disposers.push(() => {
                el.removeEventListener("mousemove", onMove);
                el.removeEventListener("mouseleave", onLeave);
            });
        });

        return () => disposers.forEach((d) => d());
    });

    return (
        <>
            <nav className="fixed top-0 left-0 z-50 flex items-center justify-between md:p-6 p-3 w-full bg-transparent">
                <Link to="/">
                    <img
                        src={getImage("WEB TOP.png")}
                        alt="navbar-logo"
                        className="md:w-24 w-20 h-auto nav-logo"
                    />
                </Link>

                <div className="flex items-center gap-3">
                    {isHomePage ? (
                        <div className="px-6 py-2 bg-[#f3e2d5] rounded-3xl hover:bg-[#e9aa56] text-center">
                            <Link to="/shop" className="text-[#523122] text-sm font-semibold p-0 m-0">
                                FIND STORES
                            </Link>
                        </div>
                    ) : (
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 px-6 py-2 bg-white/90 text-[#523122] rounded-3xl shadow-sm hover:bg-white transition-colors text-sm font-semibold"
                        >
                            <i className="ri-home-3-line text-lg"></i>
                            GO HOME
                        </Link>
                    )}

                    <button
                        type="button"
                        className="p-1 backdrop-blur-xl rounded-full menu-hover inline-flex cursor-pointer z-[1000]"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? (
                            <i className="ri-close-fill text-[#523122] text-2xl"></i>
                        ) : (
                            <i className="ri-menu-5-line text-[#523122] text-2xl"></i>
                        )}
                    </button>
                </div>
            </nav>
            <NavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
};

export default Navbar;