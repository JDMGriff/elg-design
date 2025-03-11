import { useState, useEffect } from "react";
import { HomeDataType } from "../types/types";

interface testimonialProps {
    homeData: HomeDataType;
}

const TestimonialCarousel = ({ homeData }: testimonialProps) => {
    const [index, setIndex] = useState(0);
    const testimonials = homeData.testimonials;

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const goPrev = () =>
        setIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    const goNext = () => setIndex((prev) => (prev + 1) % testimonials.length);

    return (
        <div className="group flex items-center justify-center w-full relative">
            <button
                className="text-white opacity-0 group-hover:opacity-100 absolute left-0 transition-all duration-300 drop-shadow"
                onClick={goPrev}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26.871"
                    height="26.871"
                    viewBox="0 0 26.871 26.871"
                >
                    <path
                        id="Union_54"
                        data-name="Union 54"
                        d="M.029,16.789V2.557A2.2,2.2,0,0,1,.666.628,2.185,2.185,0,0,1,2.221-.02a2.208,2.208,0,0,1,.356.029h14.23a2.192,2.192,0,0,1,0,4.385H4.414V16.789a2.192,2.192,0,0,1-4.385,0Z"
                        transform="translate(0.014 13.449) rotate(-45)"
                        fill="#fff"
                    />
                </svg>
            </button>
            <div className="text-center">
                {testimonials.map((item, i) => (
                    <div
                        key={item.id}
                        className={`animate-fadeInUp ${
                            i === index ? "block" : "hidden"
                        }`}
                    >
                        <p className="text-sm text-white">{item.testimonial}</p>
                        <span className="block text-white mt-2 text-sm font-bold">
                            {item.client}
                        </span>
                    </div>
                ))}
            </div>
            <button
                className="text-white opacity-0 group-hover:opacity-100 absolute right-0 transition-all duration-300 drop-shadow"
                onClick={goNext}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26.871"
                    height="26.871"
                    viewBox="0 0 26.871 26.871"
                >
                    <path
                        id="Union_54"
                        data-name="Union 54"
                        d="M.029,16.789V2.557A2.2,2.2,0,0,1,.666.628,2.185,2.185,0,0,1,2.221-.02a2.208,2.208,0,0,1,.356.029h14.23a2.192,2.192,0,0,1,0,4.385H4.414V16.789a2.192,2.192,0,0,1-4.385,0Z"
                        transform="translate(26.856 13.422) rotate(135)"
                        fill="#fff"
                    />
                </svg>
            </button>
        </div>
    );
};

export default TestimonialCarousel;
