export const loadFeatures = () =>
  import('@/components/Animated/DomAnimation').then((res) => res.default);
