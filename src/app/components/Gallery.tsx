"use client";
import Image from "next/image";

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

interface GalleryProps {
    galleryItems: GalleryItem[];
    isOpen: boolean;
}

export default function Gallery({ galleryItems, isOpen }: GalleryProps) {
    return (
        <div
            className={`w-1/3 bg-white p-8 absolute top-0 -right-0 h-full overflow-y-scroll transition-all duration-500 ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            {galleryItems.map((item) => (
                <div
                    className="relative group mb-6 last-of-type:mb-0"
                    key={item.id}
                >
                    {item.Image ? (
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.Image.url}`}
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
            ))}
        </div>
    );
}
