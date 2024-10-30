import React from "react";
import Card from "./Card";

type Props = {

}

const Other = (props: Props) => {
    return (
        <section className="pt-4 mb-16">
            {/* header */}
            <p className="font-bold text-2xl my-8">Other Trending Posts</p>
            <div className="sm:grid grid-cols-2 gap-16">
            <Card
                className="mt-5 bg-wh-500 sm:mt-0"
                imageHeight="h-80"
            />
            <Card
                className="mt-5 bg-wh-500 sm:mt-0"
                imageHeight="h-80"
            />
            <Card
                className="mt-5 bg-wh-500 sm:mt-0"
                imageHeight="h-80"
            />
            <Card
                className="mt-5 bg-wh-500 sm:mt-0"
                imageHeight="h-80"
            />
            </div>
        </section>
    );
};

export default Other;