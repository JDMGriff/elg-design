import Image from "next/image.js";
import { getData } from "../lib/api.js";

const galleryEndpoint = process.env.NEXT_GALLERY_API_URL;

export default async function Gallery() {
    // Check for gallery endpoint
    if (!galleryEndpoint) {
        console.error("Gallery endpoint is not defined");
        return null;
    }
    // Get gallery data
    const galleryItems = await getData({
        url: `${galleryEndpoint}?populate=Image`,
    });

    return (
        <div className="w-1/3 bg-white p-8 absolute top-0 right-0 h-full overflow-y-scroll">
            {galleryItems.map(
                (item: {
                    id: number;

                    Title: string;
                    Description: string;
                    Image: {
                        url: string;
                        height: number;
                        width: number;
                    } | null;
                }) => (
                    <div
                        className="relative group mb-6 last-of-type:mb-0"
                        key={item.id}
                    >
                        {item.Image ? (
                            <Image
                                src={`${process.env.NEXT_BASE_URL}${item.Image.url}`}
                                alt={item.Title}
                                height={item.Image.height}
                                width={item.Image.width}
                                className="w-full"
                            />
                        ) : null}
                        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center opacity-0 bg-[rgba(0,0,0,0.7)] transition-all ease-in-out duration-500 hover:opacity-100">
                            <h3 className="text-lg font-semibold text-white">
                                {item.Title}
                            </h3>
                            <p className="text-white">{item.Description}</p>
                        </div>
                    </div>
                )
            )}
        </div>
    );
}
