import React from "react";

const Footer = () => {
    return (
        <div className="container mx-auto px-6 w-full flex flex-col sm:flex-row py-8 md:px-4">
            <div className="w-full text-center md:text-left md:w-1/2">
                <p className="text-white mb-4 md:mb-0">Copyright ELGDesign</p>
            </div>
            <div className="flex flex-col justify-end w-full text-center md:text-left md:w-1/2 md:flex-row">
                <a
                    className="text-white mb-4 md:mr-8 md:mb-0"
                    href="mailto:info@elgdesign.co.uk"
                >
                    info@elgdesign.co.uk
                </a>
                <p className="text-white">
                    Call: <a href="tel:07772672427">07772 672 427</a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
