import React, { useLayoutEffect } from "react";
import Glide from "@glidejs/glide";
import { HomeDataType } from "../types/types";
import Image from "next/image";
import TestimonialCarousel from "./TestimonialCarousel";

interface LogoSliderProps {
    homeData: HomeDataType;
}

const LogoSlider = ({ homeData }: LogoSliderProps) => {
    useLayoutEffect(() => {
        const slider = document.querySelector(".glide") as HTMLElement;

        const glide = new Glide(slider, {
            type: "carousel",
            startAt: 0,
            perView: 5,
            autoplay: 4000,
            breakpoints: {
                1280: {
                    perView: 3,
                },
                1024: {
                    perView: 2,
                },
                768: {
                    perView: 1,
                },
            },
        });
        glide.mount();

        // Clean up on unmount
        return () => {
            glide.destroy();
        };
    }, [homeData]);

    return (
        <div className="container mx-auto px-6 flex flex-col justify-between md:flex-row items-center border-t border-b border-white py-12 md:py-2 md:px-4">
            <div className="flex flex-col md:flex-row items-center w-full md:w-[65%] xl:w-[80%]">
                <div className="w-full md:w-[30%] xl:w-[15%] text-center md:text-left text-white font-semibold">
                    Trusted by the best
                </div>

                <div className="glide w-full md:!w-[70%] xl:!w-[85%]">
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides">
                            {homeData.logo_slider.logos.map((logo) => (
                                <li
                                    key={logo.documentId}
                                    className="glide__slide flex items-center justify-center"
                                >
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${logo.url}`}
                                        alt={`Logo ${logo.documentId}`}
                                        width={150}
                                        height={150}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-[28%] xl:w-[18%]">
                <TestimonialCarousel homeData={homeData} />
            </div>
        </div>
    );
};

export default LogoSlider;
