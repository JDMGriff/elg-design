"use client";
import { useState } from "react";
import Hero from "./Hero";
import { HomeDataType, GalleryDataType } from "../types/types";
import Gallery from "./Gallery";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import LogoSlider from "./LogoSlider";

interface ClientWrapperProps {
    homeData: HomeDataType;
    galleryData: GalleryDataType[];
}

export default function ClientWrapper({
    homeData,
    galleryData,
}: ClientWrapperProps) {
    const [isToggled, setIsToggled] = useState(false);
    const galleryToggle = () => setIsToggled((prev) => !prev);

    return (
        <>
            <Hero
                homeData={homeData}
                isToggled={isToggled}
                galleryToggle={galleryToggle}
            />
            <Gallery
                galleryToggle={galleryToggle}
                galleryData={galleryData}
                isToggled={isToggled}
            />
            {/* Intro Text */}
            <div className="container mx-auto px-6 md:px-4 py-12">
                <div className="flex flex-col">
                    <h2 className="text-[--accent] text-[26px] font-semibold mb-8">
                        {homeData.Title}
                    </h2>
                    <div className="flex flex-col md:flex-row justify-between items-start">
                        <div className="text-white w-full mb-8 md:mb-0 md:border-r md:border-white pr-0 md:w-[50%] md:pr-20">
                            <BlocksRenderer
                                content={homeData.IntroText.slice(0, 1)}
                            />
                        </div>
                        <div className="text-white w-full pl-0 md:w-[50%] md:pl-20">
                            <BlocksRenderer
                                content={homeData.IntroText.slice(1)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Service Text */}
            <div className="container mx-auto px-6 md:px-4 py-12">
                <h3 className="text-[--accent] font-semibold text-xl mb-2">
                    {homeData.ServiceTitle}
                </h3>
                <div className="service-items w-full text-sm text-white prose prose-ul:w-full prose-ul:max-w-full prose-ul:p-0 prose-ul:flex prose-ul:flex-wrap prose-li:inline prose-li:pl-0">
                    <BlocksRenderer content={homeData.ServiceText} />
                </div>
                {/* Get in touch cta */}
                <a
                    className="bg-white inline-block px-6 py-3 rounded-full text-black mt-8 font-semibold mix-blend-screen text-lg"
                    href="mailto:info@elgdesign.co.uk"
                >
                    Get in Touch
                </a>
            </div>
            <LogoSlider homeData={homeData} />
        </>
    );
}
