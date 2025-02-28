"use client";
import { useState, useEffect } from "react";
import Gallery from "@/app/components/Gallery";
import Hero from "@/app/components/Hero";

interface GalleryItem {
    id: number;
    Title: string;
    Description: string;
    Image: {
        url: string;
        height: number;
        width: number;
    } | null;
}

interface HeroData {
    Hero: {
        Logo: {
            url: string;
            height: number;
            width: number;
        };
        Strapline: string;
    };
}

export default function Home() {
    const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
    const [heroData, setHeroData] = useState<HeroData | null>(null);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    // Fetch data on mount
    useEffect(() => {
        console.log(baseUrl);
        const fetchData = async () => {
            // Fetch gallery data
            const galleryRes = await fetch("/api/gallery");
            if (galleryRes.ok) {
                const galleryData = await galleryRes.json();
                setGalleryItems(galleryData);
            } else {
                console.error("Failed to load gallery data");
            }

            // Fetch hero data
            const heroRes = await fetch("/api/hero");
            if (heroRes.ok) {
                const heroData = await heroRes.json();
                setHeroData(heroData);
            } else {
                console.error("Failed to load hero data");
            }
        };

        fetchData();
    }, []);

    const toggleGallery = () => setIsGalleryOpen((prev) => !prev);

    return (
        <>
            <div className="w-full h-full">
                <Hero
                    heroData={heroData}
                    onToggleGallery={toggleGallery}
                    isOpen={isGalleryOpen}
                />
            </div>
            <Gallery galleryItems={galleryItems} isOpen={isGalleryOpen} />
        </>
    );
}
