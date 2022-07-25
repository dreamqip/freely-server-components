import {FC} from 'react';
import Link from "next/link";
import {Drawer} from "antd";

interface Props {
    handleVisibleChange: (visible: boolean) => void;
    visible: boolean;
}

const Sidebar: FC<Props> = ({visible, handleVisibleChange}) => {
    return (
        <Drawer
            title="Navigation"
            placement="right"
            onClose={() => handleVisibleChange(false)}
            visible={visible}
        >
            <ul className="flex flex-col items-center m-0 gap-8">
                <li className="text-xl">
                    <Link passHref href="/src/pages">
                        <a onClick={() => handleVisibleChange(false)}
                           className="text-primary-500 transition dark:text-white dark:hover:opacity-70 hover:text-primary-700">Home</a>
                    </Link>
                </li>
                <li className="text-xl">
                    <Link passHref href="/soon">
                        <a onClick={() => handleVisibleChange(false)}
                           className="text-primary-500 transition dark:text-white dark:hover:opacity-70 hover:text-primary-700">Soon</a>
                    </Link>
                </li>
                <li className="text-xl">
                    <Link passHref href="/src/pages">
                        <a onClick={() => handleVisibleChange(false)}
                           className="text-primary-500 transition dark:text-white dark:hover:opacity-70 hover:text-primary-700">Nothing</a>
                    </Link>
                </li>
            </ul>
        </Drawer>
    );
};

export default Sidebar;
