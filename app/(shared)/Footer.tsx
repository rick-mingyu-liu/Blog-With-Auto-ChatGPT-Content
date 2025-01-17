import React from "react";

const Footer = () => {
    return (
        <footer className="bg-wh-900 text-wh-50 py-10 px-10">
            <div className="justify-between mx-auto gap-16 sm:flex">
                {/* first column */}
                <div className="mt-16 basis-1/2 sm:mt-0">
                    <h4 className="font-bold">
                        BLOG OF THE FUTURE
                    </h4>
                    <p>
                        Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
                        purus et arcu massa dictum condimentum. Augue scelerisque iaculis
                        orci ut habitant laoreet. Iaculis tristique.
                    </p>
                    <p>
                        © Blog of the Future All Rights Reserved.
                    </p>
                </div>

                {/* second column */}
                <div className="mt-16 basis-1/4 sm:mt-0">
                    <h4 className="font-bold">
                        Links
                    </h4>
                    <p className="my-5">
                        Massa orci senectus
                    </p>
                    <p className="my-5">
                        Some random link again
                    </p>
                    <p>
                        Ullamcorper vivamus
                    </p>
                </div>

                {/* third column */}
                <div className="mt-16 basis-1/4 sm:mt-0">
                    <h4 className="font-bold">
                        Contact Us
                    </h4>
                    <p className="my-5">
                        Tempus metus mattis risus volutpat egestas.
                    </p>
                    <p>
                        (123)-456-789
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;