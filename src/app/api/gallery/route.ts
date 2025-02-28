import { NextResponse } from "next/server";

export async function GET() {
    const galleryEndpoint = process.env.NEXT_PUBLIC_GALLERY_API_URL;

    try {
        const response = await fetch(`${galleryEndpoint}?populate=Image`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const text = await response.text();

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = JSON.parse(text);
        const galleryData = data.data || [];

        return NextResponse.json(galleryData);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error fetching gallery data:", error.message);
        } else {
            console.error("Error fetching gallery data:", error);
        }
        return NextResponse.json(
            { error: "Failed to fetch gallery data" },
            { status: 500 }
        );
    }
}
