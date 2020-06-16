let defaultPageTransition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const config = {
  apiUrl: "http://localhost:5000",
  noImageUrl: "/assets/no-image.png",
  transitions: {
    default: defaultPageTransition,
  },
  variants: {
    page: {
      exit: {
        opacity: 0,
        scale: 0.5,
        transition: defaultPageTransition,
      },
      exitUp: {
        y: "0%",
        opacity: 0,
        transition: defaultPageTransition,
      },
      enter: {
        y: "0%",
        opacity: 1,
        scale: 1,
        transition: defaultPageTransition,
      },
    },
  },
};

export default config;
