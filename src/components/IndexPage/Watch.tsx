import {FC, Suspense} from 'react';
import dynamic from "next/dynamic";
import Spinner from "@/components/Spinner";

const LottieWatch = dynamic(() => import("@/components/Lottie/Watch"), {
    suspense: true
});

const Watch: FC = () => {
    return (
        <section className="flex flex-col md:flex-row-reverse items-center justify-center pt-10 min-h-[400px]">
            <h2 className="text-5xl md:text-8xl dark:text-white m-0 text-center md:text-left max-w-min">Watch
                everywhere.</h2>
            <div>
                <Suspense fallback={<Spinner/>}>
                    <LottieWatch/>
                </Suspense>
            </div>
        </section>
    );
};

export default Watch;
