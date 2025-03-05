import ClientWrapper from "./components/ClientWrapper";
import { HeroDataType, GalleryDataType } from "./types/types";

async function getHomepageData(): Promise<HeroDataType> {
    const res = await fetch("http://localhost:3000/api/homepage", {
        cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch homepage data");
    const data = await res.json();
    return data.data.homepage.Hero;
}

async function getGalleryData(): Promise<GalleryDataType[]> {
    const res = await fetch("http://localhost:3000/api/gallery", {
        cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch gallery data");
    const data = await res.json();
    return data.data.galleries; // Adjust based on your API response
}

export default async function HomePage() {
    const heroData = await getHomepageData();
    const galleryData = await getGalleryData();

    return (
        <div className="w-full h-full">
            <ClientWrapper heroData={heroData} galleryData={galleryData} />
        </div>
    );
}
