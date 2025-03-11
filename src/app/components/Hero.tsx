"use client";
// import { useState } from "react";
import Image from "next/image";
import { HomeDataType } from "../types/types";

interface HeroProps {
    homeData: HomeDataType;
    galleryToggle: () => void;
    isToggled: boolean;
}

export default function Hero({
    homeData,
    galleryToggle,
    isToggled,
}: HeroProps) {
    return (
        <div className="container mx-auto px-6 md:px-4 h-full flex flex-col items-start justify-end pb-20">
            <Image
                alt="elg Logo"
                className="max-w-[680px] w-full mb-12 md:mb-6"
                height={homeData.Hero.Logo.height}
                src={`https://elg-design-admin.onrender.com${homeData.Hero.Logo.url}`}
                width={homeData.Hero.Logo.width}
            />
            <div className="w-full max-w-none xl:max-w-[50%] flex flex-col items-start md:flex-row md:items-center justify-between">
                <h1 className="text-lg uppercase text-white font-bold mb-12 md:mb-0">
                    {homeData.Hero.Strapline}
                </h1>

                <button
                    onClick={galleryToggle}
                    className="group rounded-sm text-white text-lg flex items-center md:pt-3 md:pr-8 md:pb-3 md:pl-4 md:transition-all md:duration-500 md:hover:bg-[rgba(0,0,0,0.4)]"
                >
                    {isToggled ? "Hide Gallery" : "View Gallery"}
                    <svg
                        className="translate-x-2 group-hover:translate-x-4 transition-all duration-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="12.636"
                        viewBox="0 0 16 12.636"
                    >
                        <path
                            id="Path_56"
                            data-name="Path 56"
                            d="M12.213,17.67a.676.676,0,0,1,0-.956l4.48-4.48H3.676a.676.676,0,1,1,0-1.352H16.693L12.213,6.4a.676.676,0,0,1,.956-.956L18.8,11.081a.676.676,0,0,1,0,.956L13.168,17.67A.676.676,0,0,1,12.213,17.67Z"
                            transform="translate(-3 -5.232)"
                            fill="#fff"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
