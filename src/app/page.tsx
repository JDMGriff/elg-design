import ClientWrapper from "./components/ClientWrapper";
import { HomeDataType, GalleryDataType } from "./types/types";

async function getHomepageData(): Promise<HomeDataType> {
    const res = await fetch(
        `https://elg-design-admin.onrender.com/api/homepage?populate[Hero][populate]=Logo&populate[logo_slider][populate]=logos&populate[testimonials]=true`,
        {
            cache: "no-store",
        }
    );
    if (!res.ok) throw new Error("Failed to fetch homepage data");
    const data = await res.json();
    return data.data;
}

async function getGalleryData(): Promise<GalleryDataType[]> {
    const res = await fetch(
        `https://elg-design-admin.onrender.com/api/galleries`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        console.error("Failed to fetch gallery data:", res.statusText);
        throw new Error("Failed to fetch gallery data");
    }

    const data = await res.json();
    console.log("Gallery Data Response:", data); // Log the full response
    return data.data;
}

export default async function HomePage() {
    const heroData = await getHomepageData();
    const galleryData = await getGalleryData();

    return <ClientWrapper homeData={heroData} galleryData={galleryData} />;
}
