export const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };
  
  export const Bg = (direction, type, delay, duration) => {
    return {
      hidden: {
        opacity: 1,
        background: 'rgb(120,0,140)',
        backgroundImage: 'linear-gradient(0deg, rgba(120,0,140,1) 0%, rgba(202,25,192,1) 35%, rgba(0,212,255,1) 100%)'
      },
      show: {
        opacity: 1,
        background: 'rgb(120,0,140)',
        backgroundImage: 'linear-gradient(180deg, rgba(120,0,140,1) 0%, rgba(202,25,192,1) 35%, rgba(0,212,255,1) 100%)',
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
          repeat: Infinity,
          repeatType: "loop"
        },
      },
      show2: {
        opacity: 1,
        background: 'rgb(120,0,140)',
        backgroundImage: 'linear-gradient(0deg, rgba(120,0,140,1) 0%, rgba(202,25,192,1) 35%, rgba(0,212,255,1) 100%)',
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
          repeat: Infinity,
          repeatType: "loop"
        },
      },
  };
}

  export const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const zoomIn = (delay, duration) => {
    return {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };