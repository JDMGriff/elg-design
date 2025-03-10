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
        <div className="flex items-center justify-center w-full">
            <button className="text-white" onClick={goPrev}>
                ←
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
            <button className="text-white" onClick={goNext}>
                →
            </button>
        </div>
    );
};

export default TestimonialCarousel;
