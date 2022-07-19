module.exports = {
  content: ["./src/**/*.html"],
  safelist: ["is-sticky"],
  theme: {
    screens: {
      xs: "320px",
      sm: "540px",
      md: "920px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1536px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "serif"],
        playfair: ["Playfair Display", "serif"],
        roboto: ["Roboto", "serif"],
        kalam: ["Kalam", "serif"],
        acumin: ["Acumin Pro", "serif"]
      },

      colors: {
        primary: "#e4dcca", //main color
        yellow: "#F8FDC6", //second primary color
        lime: "#F4F3E9", //third primary color
        'green-light': '#B1BFAD',
        'green-dark': '#242E22',
        'yellow-hover': 'rgba(230, 234, 187, 1)',
        sky: {
          200: "#fffaef",
          100: "#effafa",
        },
        white: "#fff",
        orange: "#fc6539",        
        secondary: "",
        dark: "#1f2226",
        footer: '#ffffff7a',
        gray: {
          DEFAULT: "#f9f5f4",
          light: "#f6f6f6",
          700: "#f7f7f7",
          600: "#e5e5e5",
          500: "#666666",
          400: "#f8f8f8",
          300: "#f1f1f1",
          200: "#fbfbfb",
          100: "#f7f2f1",
        },
        facebook: "#3b5999",
        twitter: "#55acee",
        dribbble: "#ea4c89",
        pinterest: "#bd081c",
        instagram: "#c32aa3",
      },

      //title1: text-3lg lg:text-4xl xl:text-5xl 
      //title2: text-2lg lg:text-xl xl:text-3xl 
      //title3: text-6md lg:text-lg xl:text-3lg 
      //title4: text-3md lg:text-5md xl:text-7md 
      //title5: text-md lg:text-2md xl:text-4md 
      //body1: text-base lg:text-md xl:text-md 
      //body2: text-3sm lg:text-4sm xl:text-4sm 
      //eyebrow: text-2sm
      fontSize: {
        sm: "12px",
        "2sm": ["14px", "14px"],
        "3sm": ["14px", "19.6px"],
        "4sm": ["16px", "22.4px"],
        base: ["18px", "25.2px"],
        md: ["20px", "28px"], 
        "2md": ["22px", "30.8px"], 
        "3md": ["24px", "31.2px"], 
        "4md": ["24px", "33.6px"], 
        "5md": ["26px", "33.8px"],
        "6md": ["28px", "28px"],
        "7md": ["32px", "41.6px"],
        lg: ["40px", "40px"],
        "2lg": ["40px", "44px"],
        "3lg": ["56px", "56px"],
        xl: ["64px", "57.6px"],
        "2xl": ["64px", "90%"],
        "3xl": ["80px", "72px"],
        "4xl": ["88px", "88px"],
        "5xl": ["120px", "120px"],
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
      },

      translate: {
        "translate-x-full-120": "120%",
      },
      rotate: {
        115: "115deg",
      },
      boxShadow: {
        DEFAULT: "0 0 20px .4px rgba(0,0,0,.1)",
        deal: "0 10px 30px 0 rgba(209,209,209,.5)",
        product: "0 4px 10px rgba(0,0,0,.1)",
        sticky: "0 0 25px 0 rgba(0,0,0,.06)",
      },

      height: {
        "1px": "1px",
        "2px": "2px",
        "500px": "500px",
        "600px": "600px",
        "700px": "700px",
        800: "800px",
        "sm-b-h": "365px",
      },
      maxWidth: {
        1000: "1000px",
      },
      outline: {
        blue: ["2px solid red", "1px"],
      },
      keyframes: {
        fadeInLeft: {
          "0%": {
            opacity: "0",
            transform: "translate3d(-100px, 0, 0)",
          },
          to: {
            opacity: "1",
            transform: "none",
          },
        },
        fadeInDown: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, -100px, 0)",
          },
          to: {
            opacity: "1",
            transform: "none",
          },
        },
        fadeInRight: {
          "0%": {
            opacity: 0,
            transform: "translate3d(100px,0 , 0)",
          },
          to: {
            opacity: "1",
            transform: "none",
          },
        },
      },

      animation: {
        fadeInLeft: "fadeInLeft 1.3s ease-in-out",
        fadeInRight: "fadeInRight 1.3s ease-in-out",
        fadeInDown: "fadeInDown 0.7s ease-in-out 0s normal none 1 running",
      },

      flex: {
        30: "0 0 30%",
      },
    },

    pseudo: {
      before: "before",
      after: "after",
      "not-first": "not(:first-child)",
    },

    listStyleType: {
      circle: "circle",
    },
  },

  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "460px",
          },
          "@screen md": {
            maxWidth: "800px",
          },
          "@screen lg": {
            maxWidth: "900px",
          },
          "@screen xl": {
            maxWidth: "1300px",
          },
        },
        ".component-reverse": {
          "@screen md": {
            flexDirection: "column-reverse",
          },
          "@screen sm": {
            flexDirection: "column-reverse",
          },
          "@screen xs": {
            flexDirection: "column-reverse",
          },
          
          "@screen lg": {
            flexDirection: "inherit",
          },

          "@screen xl": {
            flexDirection: "inherit",
          },
        },
        ".transform-flip": {
          transform: "scaleX(-1)"
        }
      });
    },
    require("tailwindcss-pseudo")({
      empty: true,
    }),
  ],
};
