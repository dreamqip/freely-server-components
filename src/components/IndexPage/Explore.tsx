import {FC, Suspense} from 'react';
import dynamic from "next/dynamic";
import Spinner from "@/components/Spinner";

const LottieExplore = dynamic(() => import("@/components/Lottie/Explore"), {
    suspense: true
});

const Explore: FC = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center pt-10">
            <div className="max-w-xl">
                <h2 className="text-5xl md:text-8xl dark:text-white m-0 text-center md:text-left">Explore.</h2>
                <h3 className="text-3xl md:text-4xl dark:text-white m-0 text-center md:text-left font-normal mt-6 tracking-widest leading-6">Millions
                    of movies, TV
                    shows and people</h3>
            </div>
            <div className="flex">
                <Suspense fallback={<Spinner />}>
                    <LottieExplore/>
                </Suspense>
            </div>
        </section>
    );
};

export default Explore;
