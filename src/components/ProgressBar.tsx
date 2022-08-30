import {FC} from 'react';
import NextNProgress from "nextjs-progressbar";

const ProgressBar: FC = () => {
    return (
        <NextNProgress
            color="#6200EE"
            startPosition={0.3}
            stopDelayMs={200}
            height={2}
            showOnShallow={true}
            options={{
                trickleSpeed: 100,
                showSpinner: false,
            }}
        />
    );
};

export default ProgressBar;
