"use client";
import { useState } from "react";
import Hero from "./Hero";
import { HeroDataType, GalleryDataType } from "../types/types";
import Gallery from "./Gallery";

interface ClientWrapperProps {
    heroData: HeroDataType;
    galleryData: GalleryDataType[];
}

export default function ClientWrapper({
    heroData,
    galleryData,
}: ClientWrapperProps) {
    const [isToggled, setIsToggled] = useState(false);
    const galleryToggle = () => setIsToggled((prev) => !prev);

    return (
        <>
            <Hero
                heroData={heroData}
                isToggled={isToggled}
                galleryToggle={galleryToggle}
            />
            <Gallery galleryData={galleryData} isToggled={isToggled} />
        </>
    );
}
