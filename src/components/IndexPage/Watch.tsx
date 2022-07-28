import {FC} from 'react';
import Lottie from 'lottie-react';
import watchData from '../../lotties/watch.json';

const Watch: FC = () => {
    return (
        <section className="flex flex-col md:flex-row-reverse items-center justify-center pt-10 min-h-[400px]">
            <h2 className="text-5xl md:text-8xl dark:text-white m-0 text-center md:text-left max-w-min">Watch
                everywhere.</h2>
            <div>
                <Lottie
                    animationData={watchData}
                />
            </div>
        </section>
    );
};

export default Watch;
