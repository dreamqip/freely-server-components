import {FreeMode, Mousewheel, Navigation, SwiperOptions} from "swiper";

export const swiperOptions: SwiperOptions = {
    modules: [Navigation, Mousewheel, FreeMode],
    spaceBetween: 10,
    mousewheel: {
        forceToAxis: true
    },
    freeMode: {
        enabled: true
    },
    navigation: {
        enabled: false
    },
    slidesPerView: 2.3,
    slidesPerGroup: 1,
    breakpoints: {
        768: {
            slidesPerView: 3.3,
            slidesPerGroup: 2,
            spaceBetween: 15
        },
        1024: {
            slidesPerView: 5,
            slidesPerGroup: 3,
            spaceBetween: 20,
            navigation: {
                enabled: true
            },
            freeMode: {
                enabled: false
            }
        }
    }
}
