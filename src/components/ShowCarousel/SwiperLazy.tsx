import {FC, PropsWithChildren} from "react";
import {Swiper} from "swiper/react";
import {swiperOptions} from "@/utilities/swiperConfig";

import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/free-mode";

const SwiperLazy: FC<PropsWithChildren<any>> = props => {
    return (
        <Swiper {...swiperOptions} className="p-4">
            {props.children}
        </Swiper>
    );
}

export default SwiperLazy;
