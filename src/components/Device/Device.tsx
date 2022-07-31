import {ReactElement} from 'react';
import {useMediaQuery} from "react-responsive";

export interface DeviceProps {
    desktop?: boolean;
    mobile?: boolean;
    children: ReactElement;
}

export const Device = ({ desktop, mobile, children }: DeviceProps): ReactElement | null => {
    const isDesktopOrLaptop = useMediaQuery({
        minWidth: 1224
    });
    const isMobile = useMediaQuery({
        maxWidth: 568
    });


    return (isMobile && mobile) || (isDesktopOrLaptop && desktop) ? children : null;
};
