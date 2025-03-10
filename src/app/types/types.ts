export interface HomeDataType {
    Hero: {
        Strapline: string;
        Logo: {
            url: string;
            width: number;
            height: number;
        };
    };
    logo_slider: {
        logos: {
            documentId: number;
            url: string;
            width: number;
            height: number;
        }[];
    };
    IntroText: [];
    ServiceText: [];
    ServiceTitle: string;
    Title: string;
    testimonials: {
        testimonial: string;
        client: string;
        id: number;
    }[];
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
