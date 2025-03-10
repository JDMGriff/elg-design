import Image from "next/image";
import { GalleryDataType } from "../types/types";

interface GalleryProps {
    galleryData: GalleryDataType[];
    isToggled: boolean;
    galleryToggle: () => void;
}

export default function Gallery({
    galleryData,
    isToggled,
    galleryToggle,
}: GalleryProps) {
    return (
        <div
            className={`w-full md:w-[40%] z-10 fixed top-40 md:top-0 md:-right-0 h-full overflow-y-scroll flex flex-col transition-all duration-500 md:flex-row ${
                isToggled
                    ? "translate-y-0 md:translate-x-0 md:translate-y-0"
                    : "translate-y-full md:translate-x-full md:translate-y-0"
            }`}
        >
            <button
                onClick={galleryToggle}
                className="bg-white inline-block text-black z-10 h-[38px] w-[38px] md:h-[48px] md:w-[48px] sticky top-0 flex items-center justify-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22.628"
                    height="22.628"
                    viewBox="0 0 22.628 22.628"
                >
                    <path
                        id="Union_54"
                        data-name="Union 54"
                        d="M7,15V9H1A1,1,0,1,1,1,7H7V1A1,1,0,1,1,9,1V7h6a1,1,0,0,1,0,2H9v6a1,1,0,1,1-2,0Z"
                        transform="translate(0 11.314) rotate(-45)"
                        fill="#0f0f10"
                    />
                </svg>
            </button>
            <div className="bg-white p-10 md:p-8 top-0 absolute right-0 w-full md:w-[calc(100%-48px)]">
                {galleryData.map((item, index) => (
                    <div
                        className="relative group mb-6 last-of-type:mb-0"
                        key={index}
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
        </div>
    );
}
