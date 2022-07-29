import {FC, useEffect, useState} from 'react';
import Lottie from "lottie-react";

const Explore: FC = () => {
    const [animationData, setAnimationData] = useState<any>(null);

    useEffect(() => {
        const loadAnimation = async () => {
            const animationData = await import("../../lotties/explore.json");
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

export default Explore;
