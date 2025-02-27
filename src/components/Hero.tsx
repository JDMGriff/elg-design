import { getData } from "@/lib/api";
import Image from "next/image";

const homepageEndpoint = process.env.NEXT_HOME_API_URL;

export default async function Hero() {
    // Check for hero endpoint
    if (!homepageEndpoint) {
        console.error("Gallery endpoint is not defined");
        return null;
    }
    // Get hero data
    const heroData = await getData({
        url: `${homepageEndpoint}?populate=Hero.Logo`,
    });

    return (
        <div className="container mx-auto h-full flex flex-col items-start justify-end pb-24">
            <Image
                alt="elg Logo"
                className="max-w-[680px] w-full mb-6"
                height={heroData.Hero.Logo.height}
                src={`${process.env.NEXT_BASE_URL}${heroData.Hero.Logo.url}`}
                width={heroData.Hero.Logo.width}
            />
            <h1 className="text-lg uppercase text-white font-bold">
                {heroData.Hero.Strapline}
            </h1>
        </div>
    );
}
