import { FreeMode, Navigation, SwiperOptions } from 'swiper';

export const swiperOptions: SwiperOptions = {
  modules: [Navigation, FreeMode],
  spaceBetween: 10,
  freeMode: {
    enabled: true,
    momentumRatio: 0.75,
    momentumVelocityRatio: 1.5,
  },
  navigation: {
    enabled: false,
  },
  slidesPerView: 1.1,
  slidesPerGroup: 1,
  breakpoints: {
    568: {
      slidesPerView: 2.1,
    },
    768: {
      slidesPerView: 3.3,
      slidesPerGroup: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 5,
      slidesPerGroup: 3,
      spaceBetween: 20,
      navigation: {
        enabled: true,
        hideOnClick: true,
      },
      freeMode: {
        enabled: false,
      },
    },
  },
  preloadImages: false,
  speed: 700,
  preventInteractionOnTransition: true,
  grabCursor: true,
};
