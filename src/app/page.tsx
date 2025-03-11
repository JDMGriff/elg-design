import ClientWrapper from "./components/ClientWrapper";
import { HomeDataType, GalleryDataType } from "./types/types";

async function getHomepageData(): Promise<HomeDataType> {
    const res = await fetch(
        `https://elg-design-admin.onrender.com/api/homepage`,
        {
            cache: "no-store",
        }
    );
    if (!res.ok) throw new Error("Failed to fetch homepage data");
    const data = await res.json();
    return data.data.homepage;
}

async function getGalleryData(): Promise<GalleryDataType[]> {
    const res = await fetch(
        `https://elg-design-admin.onrender.com/api/gallery`,
        {
            cache: "no-store",
        }
    );
    if (!res.ok) throw new Error("Failed to fetch gallery data");
    const data = await res.json();
    return data.data.galleries;
}

export default async function HomePage() {
    const heroData = await getHomepageData();
    const galleryData = await getGalleryData();

    return <ClientWrapper homeData={heroData} galleryData={galleryData} />;
}
