import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";

export default async function Home() {
    return (
        <>
            <div className="w-full h-full">
                <Hero />
            </div>
            <Gallery />
        </>
    );
}
