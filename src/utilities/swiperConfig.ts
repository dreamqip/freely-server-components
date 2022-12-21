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
    568: {
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
    1440: {
      slidesPerView: 8,
      slidesPerGroup: 4,
      spaceBetween: 10,
    },
  },
  preloadImages: false,
  speed: 700,
  preventInteractionOnTransition: false,
  grabCursor: true,
};
