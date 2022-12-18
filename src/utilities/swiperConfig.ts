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
  slidesPerView: 3.1,
  slidesPerGroup: 1,
  breakpoints: {
    768: {
      slidesPerView: 4.1,
      slidesPerGroup: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 6,
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
