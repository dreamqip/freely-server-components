import type {NextPage} from "next";
import {SignalSlashIcon} from "@heroicons/react/24/solid";

const Offline: NextPage = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <SignalSlashIcon className="w-40 h-40 mb-4"/>
            <div className="text-center mb-6 font-black text-[120px] md:text-[220px] leading-none text-gray-700 dark:text-gray-400">
                Offline
            </div>
            <h1 className="text-center font-black dark:text-white text-4xl">
                You are offline now. Please connect to the network.
            </h1>
        </div>
    );
};

export default Offline;
