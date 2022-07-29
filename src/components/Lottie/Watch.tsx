import {FC, useEffect, useState} from 'react';
import Lottie from "lottie-react";

const Watch: FC = () => {
    const [animationData, setAnimationData] = useState<any>(null);

    useEffect(() => {
        const loadAnimation = async () => {
            const animationData = await import("../../lotties/watch.json");
            setAnimationData(animationData);
        }
        loadAnimation();
    }, []);

    return (
        <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
        />
    );
};

export default Watch;
