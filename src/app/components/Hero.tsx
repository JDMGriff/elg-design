import Image from "next/image";

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

interface HeroProps {
    heroData: HeroData | null;
    onToggleGallery: () => void;
    isOpen: boolean;
}

export default function Hero({ heroData, onToggleGallery, isOpen }: HeroProps) {
    if (!heroData) return null;

    return (
        <div className="container mx-auto h-full flex flex-col items-start justify-end pb-20">
            <Image
                alt="elg Logo"
                className="max-w-[680px] w-full mb-6"
                height={heroData.Hero.Logo.height}
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${heroData.Hero.Logo.url}`}
                width={heroData.Hero.Logo.width}
            />
            <div className="w-full max-w-[60%] flex items-center justify-between">
                <h1 className="text-lg uppercase text-white font-bold">
                    {heroData.Hero.Strapline}
                </h1>
                <button
                    onClick={onToggleGallery}
                    className="group rounded-sm text-white text-lg flex items-center pt-3 pr-8 pb-3 pl-4 transition-all duration-500 hover:bg-[rgba(0,0,0,0.4)]"
                >
                    {isOpen ? "Hide Gallery" : "View Gallery"}
                    <svg
                        className="translate-x-2 group-hover:translate-x-4 transition-all duration-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="12.636"
                        viewBox="0 0 16 12.636"
                    >
                        <path
                            id="Path_56"
                            data-name="Path 56"
                            d="M12.213,17.67a.676.676,0,0,1,0-.956l4.48-4.48H3.676a.676.676,0,1,1,0-1.352H16.693L12.213,6.4a.676.676,0,0,1,.956-.956L18.8,11.081a.676.676,0,0,1,0,.956L13.168,17.67A.676.676,0,0,1,12.213,17.67Z"
                            transform="translate(-3 -5.232)"
                            fill="#fff"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
