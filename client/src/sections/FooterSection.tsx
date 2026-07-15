import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { getImage } from '../utils/media';
import splash from "../assets/videos/splash.mp4"
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";

const FooterSection = () => {
    const vidRef = useRef<HTMLVideoElement>(null);

    const isMobF = useMediaQuery({
        query: "(max-width: 768px)",
    });

    useGSAP(() => {
        if (vidRef.current) {
            ScrollTrigger.create({
                trigger: vidRef.current,
                start: "top bottom",
                end: "bottom top",
                onEnter: () => vidRef.current?.play(),
                onLeave: () => vidRef.current?.pause(),
                onEnterBack: () => vidRef.current?.play(),
                onLeaveBack: () => vidRef.current?.pause(),
            });
        }

        document.fonts.ready.then(() => {
            const footTextSplit = SplitText.create(".footer-title-animation", { type: "chars" });

            gsap.from(footTextSplit.chars, {
                yPercent: 200,
                stagger: 0.02,
                ease: "power1.inOut",
                zIndex: 0,
                scrollTrigger: {
                    trigger: ".footer-section",
                    start: `${isMobF ? "top 60%" : "top 50%"}`,
                    end: `${isMobF ? "top 20%" : "top 10%"}`,
                    scrub: 1.5,
                    // markers: true
                }
            });
        });
    });

    return (
        <section className="footer-section lg:pt-20 relative w-full overflow-hidden min-h-screen">

            <div className="absolute inset-0 overflow-hidden">
                {isMobF ? (
                    <img src={getImage("footer-drink.png")} alt="footer img" className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                    <video
                        ref={vidRef}
                        src={splash}
                        playsInline
                        muted
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                )}
            </div>

            <div className="relative z-20 lg:pt-[8vh] pt-[6vh] pb-10">
                <div className="overflow-hidden">
                    <h1 className="general-title text-center text-milk footer-title-animation lg:pb-0 pb-5">#Kamat's Tea</h1>
                </div>
            </div>


            <div className="flex-center gap-3 relative z-20 md:mt-10 mt-5">
                
                <div className="social-btn">
                    <img src={getImage("yt.svg")} alt="yt" />
                </div>

                <a href="https://www.instagram.com/kamats_tea?igsh=MWhvNTJjN2ZiNG9xcg%3D%3D" target="_blank" rel="noreferrer" className="social-btn">
                    <img src={getImage("insta.svg")} alt="instagram" />
                </a>
            </div>

            <div className="relative z-20 mt-12 lg:mb-32 mb-20 md:px-7 px-5 flex gap-10 md:flex-row flex-col justify-between items-start text-milk font-paragraph md:text-sm font-medium">
                <div className="flex items-start md:gap-10 gap-5">
                    <div>
                        <p></p>
                    </div>
                    <div>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <div>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
                <div className="md:max-w-sm">
                    <div className="flex flex-col items-center text-center gap-4">
                        <h1 className="text-lg font-semibold">DESIGNED & DEVELOPED BY AIIR DESK</h1>
                        <p className="text-[#D9D9D9]">The digital marketing company behind this experience.</p>
                        <img src={getImage("AIRDESK.png")} alt="Aiir Desk logo" className="w-27 h-auto" />
                    </div>
                </div>
            </div>

            <div className="relative z-20 copyright-box">
                <p></p>
                <div className="flex items-center gap-7">
                    <p></p>
                    <p></p>
                </div>
            </div>
        </section>
    );
};

export default FooterSection;