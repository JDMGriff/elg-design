import { NextResponse } from "next/server";

export async function GET() {
    const query = `
    query {
		homepage {
			Hero {
			Logo {
				url
				width
				height
			}
			Strapline
			}
			IntroText
			ServiceText
			ServiceTitle
			Title
		}
    }
  `;

    const res = await fetch("http://localhost:1338/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
    });

    const data = await res.json();

    return NextResponse.json(data);
}
