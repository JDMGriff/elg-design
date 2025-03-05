export interface HeroDataType {
    Strapline: string;
    Logo: {
        url: string;
        width: number;
        height: number;
    };
}

export interface GalleryDataType {
    Description: string;
    Image: {
        url: string;
        width: number;
        height: number;
    };
    Title: string;
}
