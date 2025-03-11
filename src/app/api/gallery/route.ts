import { NextResponse } from "next/server";

export async function GET() {
    const query = `
    query {
        galleries {
            Description
            Image {
                url
                width
                height
            }
            Title
        }
    }
  `;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}graphql`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
    });

    const data = await res.json();

    return NextResponse.json(data);
}
