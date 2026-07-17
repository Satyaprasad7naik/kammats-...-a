// import React, { useState, useEffect } from "react";
// import gsap from "gsap";
// import { Link } from "react-router-dom";
// import menu1 from "../assets/menu-img/menu1.png";
// import menu2 from "../assets/menu-img/menu2.png";
// import menu3 from "../assets/menu-img/menu3.png";
// import menu4 from "../assets/menu-img/menu4.png";
// import menu5 from "../assets/menu-img/menu5.png";
// import menu6 from "../assets/menu-img/menu6.png";
// import menu7 from "../assets/menu-img/menu7.webp";

// interface MenuItem {
//     name: string;
//     img: string;
//     path: string;
// }

// interface NavMenuProps {
//     isOpen: boolean;
// }

// const NavMenu: React.FC<NavMenuProps> = ({ isOpen = false }) => {

//     const menuItems: MenuItem[] = [
//         { name: "Shop", img: menu1, path: "/shop" },
//         { name: "Find in stores", img: menu2, path: "#" },
//         { name: "About Us", img: menu3, path: "#" },
//         { name: "Tasty Talks", img: menu4, path: "#" },
//         { name: "Programs", img: menu5, path: "#" },
//         { name: "Contacts", img: menu6, path: "#" },
//     ];

//     const [hovered, setHovered] = useState<string | null>(null);
//     const [activeItem, setActiveItem] = useState<MenuItem>(menuItems[0]);

//     const displayedItem = activeItem;
//     const currentImg = activeItem.img;

//     const sectionDetails: Record<string, { heading: string; description: string; lines: string[]; links?: { label: string; href: string }[] }> = {
//         Shop: {
//             heading: "Shop our latest blends",
//             description: "Browse premium tea flavors, specials, and easy checkout options.",
//             lines: [
//                 "Freshly brewed taste with every order.",
//                 "Fast delivery and curated sets for tea lovers.",
//             ],
//         },
//         "Find in stores": {
//             heading: "Find Kamat's Tea in stores",
//             description: "Discover retail locations near you and grab your favorite can.",
//             lines: [
//                 "Local partners across the region.",
//                 "Perfect for quick chai on the go.",
//             ],
//         },
//         "About Us": {
//             heading: "Learn our story",
//             description: "Get to know the journey behind Kamat's Tea and our authentic blends.",
//             lines: [
//                 "Crafted with love and premium ingredients.",
//                 "A local brand with a modern tea experience.",
//             ],
//         },
//         "Tasty Talks": {
//             heading: "Tasty Talks and stories",
//             description: "Explore tea culture, community stories, and the latest flavor inspiration.",
//             lines: [
//                 "Daily chai ideas and special moments.",
//                 "Join the conversation with our tea lovers.",
//             ],
//         },
//         Programs: {
//             heading: "Programs and events",
//             description: "See our student campaigns, loyalty offers, and special activations.",
//             lines: [
//                 "Exclusive offers for students and partners.",
//                 "Stay updated with our newest programs.",
//             ],
//         },
//         Contacts: {
//             heading: "Let’s Connect Over a Cup of Tea!",
//             description: "Have a question about our blends? Want to place a bulk order? Or simply want to share your Kamat's Tea experience? We’d love to hear from you!",
//             lines: [
//                 "📍 Our Address: uttara kannada, kumta",
//                 "📞 Phone / WhatsApp: +91 9110691327",
//                 "✉️ Email: naiksatyaprasad@gmail.com",
//                 "🕒 Working Hours: Monday to Saturday: 9:00 AM - 7:00 PM",
//             ],
//             links: [
//                 { label: "Instagram: @kamats_tea", href: "https://www.instagram.com/kamats_tea" },
//                 { label: "Facebook: Insert Facebook Link", href: "#" },
//             ],
//         },
//     };

//     // GSAP animation for menu open/close
//     useEffect(() => {
//         const menu = document.querySelector(".navmenu") as HTMLElement | null;
//         if (!menu) return;

//         if (isOpen) {
//             // Open animation
//             gsap.fromTo(
//                 menu,
//                 { yPercent: -100, opacity: 0, display: "flex" },
//                 { yPercent: 0, opacity: 1, duration: 1, ease: "power3.out", display: "flex" }
//             );
//         } else {
//             // Close animation
//             gsap.to(menu, {
//                 yPercent: -100,
//                 opacity: 0,
//                 duration: 1,
//                 ease: "power3.in",
//                 onComplete: () => { gsap.set(menu, { display: "none" }) },
//             });
//         }
//     }, [isOpen]);

//     return (
//         <div className="navmenu fixed inset-0 w-full h-screen bg-[#faeade] justify-center items-center hidden z-50">
//             <div className="flex w-full h-full">
//                 {/* Left side - Menu Links */}
//                 <div className="menu-links w-1/2 flex flex-col justify-center items-center text-center">
//                     {menuItems.map((item) => (
//                         <Link
//                             to={item.path}
//                             key={item.name}
//                             onMouseEnter={() => {
//                                 setHovered(item.name);
//                                 setActiveItem(item);
//                             }}
//                             onClick={() => setActiveItem(item)}
//                             className={`uppercase text-8xl font-extrabold tracking-tighter transition-all duration-400 ${hovered === item.name ? "" : hovered ? "opacity-15" : ""}`}
//                         >
//                             {item.name}
//                         </Link>
//                     ))}

//                     <div className="flex justify-center items-center gap-6 text-lg mt-10">
//                         <a href="https://www.youtube.com/@kamats_tea" target="_blank" rel="noopener noreferrer">YouTube</a>
//                         <a href="https://www.instagram.com/kamats_tea?igsh=MWhvNTJjN2ZiNG9xcg%3D%3D" target="_blank" rel="noopener noreferrer">Instagram</a>
//                     </div>
//                 </div>

//                 {/* Right side - Image */}
//                 <div className="menu-img w-1/2 flex justify-center items-center relative overflow-hidden">
//                     <img
//                         src={currentImg}
//                         alt="Menu Preview"
//                         className="w-full h-full object-cover transition-all duration-300 ease-out"
//                     />
//                     <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
//                         <div className="bg-black/20 border border-white/15 text-white rounded-3xl p-8 max-w-xl shadow-2xl backdrop-blur-sm">
//                             <h2 className="text-4xl font-extrabold uppercase tracking-tight mb-4">{sectionDetails[displayedItem.name].heading}</h2>
//                             <p className="mb-6 text-sm leading-7">{sectionDetails[displayedItem.name].description}</p>
//                             <div className="space-y-3 text-left text-sm leading-7">
//                                 {sectionDetails[displayedItem.name].lines.map((line) => (
//                                     <p key={line}>{line}</p>
//                                 ))}
//                             </div>
//                             {sectionDetails[displayedItem.name].links && (
//                                 <div className="mt-6">
//                                     <p className="font-semibold mb-2">Follow Us on Social Media:</p>
//                                     <div className="flex flex-col gap-2 text-sm">
//                                         {sectionDetails[displayedItem.name].links?.map((link) => (
//                                             <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="underline">{link.label}</a>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )}
//                             {displayedItem.name === "Contacts" && (
//                                 <div className="mt-6 text-sm">
//                                     <p className="font-semibold mb-2">Send Us a Message (Website Form):</p>
//                                     <p>Name: Text Box</p>
//                                     <p>Email/Phone: Text Box</p>
//                                     <p>Message: Text Box</p>
//                                     <p className="mt-3 font-semibold">[ Submit Button ]</p>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NavMenu;

import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
// Ensure these imports match your actual file structure
import menu1 from "../assets/menu-img/menu1.png";
import menu2 from "../assets/menu-img/menu2.png";
import menu3 from "../assets/menu-img/menu3.png";
import menu4 from "../assets/menu-img/menu4.png";
// import menu5 from "../assets/menu-img/menu5.png";
import menu6 from "../assets/menu-img/menu6.png";
// import menu7 from "../assets/menu-img/menu7.webp";

interface MenuItem {
    name: string;
    img: string;
    path: string;
}

interface NavMenuProps {
    isOpen: boolean;
    onClose?: () => void;
}

// Updated Type for Section Details to handle interactive lines
interface SectionDetail {
    heading: string;
    description: string;
    lines: { text: string; href?: string; icon?: string }[]; // Changed to an object to support links
    links?: { label: string; href: string }[];
}

const NavMenu: React.FC<NavMenuProps> = ({ isOpen = false, onClose }) => {

    const menuItems: MenuItem[] = [
        { name: "Shop", img: menu1, path: "/shop" },
        { name: "Find in stores", img: menu2, path: "/shop" },
        { name: "About Us", img: menu3, path: "/" },
        { name: "Tasty Talks", img: menu4, path: "/" },
        // { name: "Programs", img: menu5, path: "/" },
        { name: "Contacts", img: menu6, path: "/" },
    ];

    const [hovered, setHovered] = useState<string | null>(null);
    const [activeItem, setActiveItem] = useState<MenuItem>(menuItems[0]);

    // Form State for Contact Section
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const displayedItem = activeItem;
    const currentImg = activeItem.img;

    const sectionDetails: Record<string, SectionDetail> = {
        Shop: {
            heading: "Shop our latest blends",
            description: "Browse premium tea flavors, specials, and easy checkout options.",
            lines: [
                { text: "We have freaking delicious flavours waiting for you." },
                { text: "Freshly brewed taste with every order." },
                { text: "Fast delivery and curated sets for tea lovers." },
            ],
        },
        "Find in stores": {
            heading: "Find Kamat's Tea in stores",
            description: "Discover retail locations near you and grab your favorite can.",
            lines: [
                { text: "Local partners across the region." },
                { text: "Perfect for quick chai on the go." },
            ],
        },
        "About Us": {
            heading: "Welcome to Kamat's Tea",
            description: "A Cup of Heritage in Every Sip. We believe that tea is more than just a beverage; it’s an emotion.",
            lines: [
                { text: "Rooted in rich Indian tradition." },
                { text: "100% natural and hand-picked tea leaves." },
            ],
        },
        "Tasty Talks": {
            heading: "Chai Pe Charcha",
            description: "Explore tea culture, community stories, and read what our loyal tea-lovers have to say.",
            lines: [
                { text: "\"A tea that reminds me of authentic chai!\" — Rahul M." },
                { text: "\"The perfect 'Kadak Chai' for a rainy evening.\" — Vikram S." },
            ],
        },
        Programs: {
            heading: "Programs and events",
            description: "See our student campaigns, loyalty offers, and special activations.",
            lines: [
                { text: "Exclusive offers for students and partners." },
                { text: "Stay updated with our newest programs." },
            ],
        },
        Contacts: {
            heading: "Let’s Connect Over a Cup of Tea!",
            description: "Have a question about our blends or bulk orders? We’d love to hear from you!",
            lines: [
                { text: "📍 Our Address: Uttara Kannada, Kumta", href: "https://maps.google.com/?q=Uttara+Kannada,+Kumta" }, // Opens Maps
                { text: "📞 Phone / WhatsApp: +91 9110691327", href: "tel:+919110691327" }, // Opens Dialer
                { text: "✉️ Email: naiksatyaprasad@gmail.com", href: "mailto:naiksatyaprasad@gmail.com" }, // Opens Email Client
                { text: "🕒 Working Hours: Mon to Sat: 9:00 AM - 7:00 PM" },
            ],
            links: [
                { label: "Instagram: @kamats_tea", href: "https://www.instagram.com/kamats_tea" },
                { label: "Facebook: Kamat's Tea", href: "#" },
            ],
        },
    };

    // GSAP animation for menu open/close
    useEffect(() => {
        const menu = document.querySelector(".navmenu") as HTMLElement | null;
        if (!menu) return;

        if (isOpen) {
            gsap.fromTo(
                menu,
                { yPercent: -100, opacity: 0, display: "flex" },
                { yPercent: 0, opacity: 1, duration: 0.6, ease: "power3.out", display: "flex" }
            );
        } else {
            gsap.to(menu, {
                yPercent: -100,
                opacity: 0,
                duration: 1,
                ease: "power3.in",
                onComplete: () => { gsap.set(menu, { display: "none" }) },
            });
        }
    }, [isOpen]);

    // Handle Form Input Changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handle Form Submission (Mailto fallback)
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, message } = formData;
        
        // Construct the mailto link with the form data
        const mailtoLink = `mailto:naiksatyaprasad@gmail.com?subject=Message from ${name} via Website&body=Name: ${name}%0D%0AEmail/Phone: ${email}%0D%0AMessage:%0D%0A${message}`;
        
        // Open default email client
        window.location.href = mailtoLink;
        
        // Optional: Reset form after submitting
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="navmenu fixed inset-0 w-full h-screen bg-[#faeade] justify-center items-center hidden z-50">
            <div className="absolute top-6 left-6 z-[1100]">
                <Link
                    to="/"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#523122] text-white rounded-full shadow-lg hover:bg-[#3e2a21] transition-colors"
                >
                    <i className="ri-arrow-left-line text-xl"></i>
                    GO HOME
                </Link>
            </div>
            <div className="flex w-full h-full">
                {/* Left side - Menu Links */}
                <div className="menu-links w-1/2 flex flex-col justify-center items-center text-center">
                    {menuItems.map((item) => (
                        <Link
                            to={item.path}
                            key={item.name}
                            onMouseEnter={() => {
                                setHovered(item.name);
                                setActiveItem(item);
                            }}
                            onClick={() => {
                                setActiveItem(item);
                                onClose?.();
                            }}
                            className={`uppercase text-8xl font-extrabold tracking-tighter transition-all duration-400 ${hovered === item.name ? "" : hovered ? "opacity-15" : ""}`}
                        >
                            {item.name}
                        </Link>
                    ))}

                    <div className="flex justify-center items-center gap-6 text-lg mt-10">
                        <a href="https://www.youtube.com/@kamats_tea" target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube</a>
                        <a href="https://www.instagram.com/kamats_tea" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
                    </div>
                </div>

                {/* Right side - Image & Details Box */}
                <div className="menu-img w-1/2 flex justify-center items-center relative overflow-hidden">
                    <img
                        src={currentImg}
                        alt="Menu Preview"
                        className="w-full h-full object-cover transition-all duration-300 ease-out"
                    />
                    
                    {/* Re-enabled pointer events so the form and links can be clicked */}
                    <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-auto">
                        <div className="bg-black/40 border border-white/0 text-white rounded-3xl p-8 w-full max-w-lg shadow-2xl backdrop-blur-[1.5px] overflow-y-auto max-h-full scrollbar-hide">
                            
                            <h2 className="text-3xl font-extrabold uppercase tracking-tight mb-3">
                                {sectionDetails[displayedItem.name].heading}
                            </h2>
                            <p className="mb-4 text-sm leading-6 text-gray-200">
                                {sectionDetails[displayedItem.name].description}
                            </p>
                            
                            {/* Render Lines (Interactive or Static) */}
                            <div className="space-y-2 text-left text-sm leading-6 mb-4">
                                {sectionDetails[displayedItem.name].lines.map((line, index) => (
                                    <div key={index}>
                                        {line.href ? (
                                            <a 
                                                href={line.href} 
                                                target={line.href.startsWith("http") ? "_blank" : "_self"} 
                                                rel="noopener noreferrer"
                                                className="hover:text-yellow-400 transition-colors duration-200"
                                            >
                                                {line.text}
                                            </a>
                                        ) : (
                                            <p>{line.text}</p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Render Social Links if they exist */}
                            {sectionDetails[displayedItem.name].links && (
                                <div className="mt-4 pb-4 border-b border-white/20">
                                    <div className="flex gap-4 text-sm font-semibold">
                                        {sectionDetails[displayedItem.name].links?.map((link) => (
                                            <a 
                                                key={link.href} 
                                                href={link.href} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="hover:text-yellow-400 underline transition-colors"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Actual Form for "Contacts" Menu Item */}
                            {displayedItem.name === "Contacts" && (
                                <form onSubmit={handleFormSubmit} className="mt-6 flex flex-col gap-3">
                                    <p className="font-semibold text-sm mb-1 text-yellow-400">Send Us a Message:</p>
                                    
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your Name" 
                                        required
                                        className="w-full bg-black/30 border border-white/30 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                                    />
                                    
                                    <input 
                                        type="text" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email or Phone No." 
                                        required
                                        className="w-full bg-black/30 border border-white/30 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                                    />
                                    
                                    <textarea 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Your Message..." 
                                        rows={3}
                                        required
                                        className="w-full bg-black/30 border border-white/30 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                                    />
                                    
                                    <button 
                                        type="submit" 
                                        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 rounded-lg transition-colors mt-1"
                                    >
                                        Submit
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavMenu;