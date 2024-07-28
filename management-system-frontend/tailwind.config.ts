module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // darkMode: false,
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1500px",
      "3xl": "1780px",
    },
    fontFamily: {
      heebo: ["Heebo", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#983732",
        primaryLight: "#EEE6E6",
        secondary: "#404E68",
        body: "#5A5A5A",
        heading: "#212121",
        input: "#1D1E1F",
        black: "#000",
        white: "#fff",
        linen: "#FBF1E9",
        linenSecondary: "#ECE7E3",
        olive: "#3D9970",
        maroon: "#B03060",
        brown: "#C7844B",
        placeholder: "#707070",
        borderBottom: "#f7f7f7",
        facebook: "#4267B2",
        facebookHover: "#395fad",
        google: "#4285F4",
        googleHover: "#307bf9",
        lightShade: "#FAFBFC",
        gray: {
          50: "#FBFBFB",
          100: "#F1F1F1",
          150: "#F4F4F4",
          200: "#F9F9F9",
          300: "#E6E6E6",
          350: "#E9ECEF",
          400: "#999999",
          500: "#D8D8D8",
          600: "#3A3A3A",
          700: "#292929",
          800: "#707070",
          900: "#343D48",
        },
      },
      fontSize: {
        "10px": ".625rem",
      },
      spacing: {
        "430px": "430px",
        "450px": "450px",
        "500px": "500px",
        "64vh": "64vh",
      },
      minHeight: {
        "50px": "50px",
      },
      scale: {
        80: "0.8",
        85: "0.85",
        300: "3",
        400: "4",
      },
      animation: {
        shine: "shine 1s",
        shineRTL: "shineRTL 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
        shineRTL: {
          "100%": { right: "125%" },
        },
      },
    },
    boxShadow: {
      xs: "rgba(0,0,0, 0.2) 0px 1px 1px, rgba(0,0,0, 0.2) 0px 0px 1px",
      sm: "rgba(9, 30, 66, 0.25) 0px 1px 1px 0px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px",
      md: "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
      lg: "rgba(14, 18, 22, 0.35) 0px 10px 38px -10px, rgba(14, 18, 22, 0.2) 0px 10px 20px -15px",
      blue: "5px 5px 20px 1px rgba(0, 82, 204, 0.2)",
      overlay:
        "0px 8px 12px rgba(9, 30, 66, 0.15),0px 0px 1px rgba(9, 30, 66, 0.31)",
      "dialog-overlay": "rgba(0,0,0,0.45)",
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
