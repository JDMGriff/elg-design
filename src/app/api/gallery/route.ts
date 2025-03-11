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

    const res = await fetch("https://elg-design-admin.onrender.com/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
    });

    const data = await res.json();

    return NextResponse.json(data);
}
