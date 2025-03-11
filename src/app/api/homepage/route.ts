import { NextResponse } from "next/server";

export async function GET() {
    const query = `
    query {
		homepage {
			IntroText
			ServiceText
			ServiceTitle
			Title		
			Hero {
				Logo {
					url
					width
					height
				}
				Strapline
			}
			logo_slider {
				logos {
					url
					width
					height
					documentId
				}
			}
			testimonials {
				testimonial
				client
				id
			}				
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
