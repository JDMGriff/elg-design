import { NextResponse } from "next/server";

export async function GET() {
    const homepageEndpoint = process.env.NEXT_PUBLIC_HOME_API_URL;

    try {
        const response = await fetch(`${homepageEndpoint}?populate=Hero.Logo`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const text = await response.text();

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = JSON.parse(text);
        const heroData = data.data || {};

        return NextResponse.json(heroData);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error fetching hero data:", error.message);
        } else {
            console.error("Error fetching hero data:", error);
        }
        return NextResponse.json(
            { error: "Failed to fetch hero data" },
            { status: 500 }
        );
    }
}
