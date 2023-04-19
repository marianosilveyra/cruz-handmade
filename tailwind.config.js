module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/modules/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          primary: "#2F4882",
          dark: "#001A56",
          default: "#305183",
          secondary: "#C1D8F3",
        },

        greeny: {
          dark: "#026B52",
          default: "#039476",
          light: "#ABE7D8",
          secondary: "#D8F6F0",
        },

        black: {
          full: "#000000",
          dark: "#32333A",
          default: "#565760",
          light: "#9495A0",
        },

        gray: {
          dark: "#DCDDE7",
          default: "#F3F4F8",
          light: "#E5E5E5",
        },

        red: {
          default: "#FF4343",
          error: "#C3191D",
          light: "#F9E8E9",
        },

        orange: {
          default: "#D97E00",
          light: "#FCF3E6",
        },

        green: {
          default: "#03610C",
          light: "#E6F0E7",
        },

        violet: {
          dark: "#002256",
          default: "#304983",
          light: "#6174B3",
          secondary: "#B3BDE5",
          focus: "#F4F5FE",
        },

        fucsia: {
          dark: "#7C1A69",
          default: "#AE4C97",
          light: "#E27CC8",
          secondary: "#F4DCE8",
        },
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        PPEiko: ['"PPEiko"', "serif"],
      },
      backgroundImage: {
        placeholder: "url('../assets/images/placeholder.jpg')",
        contactUs: "url('../assets/images/contactus-pdp.jpg')",
      },
      backgroundSize: {
        113: "113%",
      },
      backgroundPosition: {
        "center-30": "center 30%",
      },
      screens: {
        // '2lg':'1280px',
        xs: "367px",
      },
    },
    screens: {
      xxxs: "320px",
      xxs: "375px",
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
}
