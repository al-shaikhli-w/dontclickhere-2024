const colors = require('tailwindcss/colors')

const primaryColor = "var(--wp--preset--color--primary)";
const secondaryColor = "var(--wp--preset--color--secondary)";
module.exports = {

  mode: "jit",
  content: ["../*.php", "../**/**/*.php", "../**/*.php"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red:colors.red,
      blue:colors.blue,
      primary: primaryColor,
      secondary: secondaryColor,
    },
    fontFamily:{
      'classic' : ['Limelight', 'cursive'],
      'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
      'sen': ["Sen" , "sans-serif"],
      'helvetica': ["Helvetica", "Arial", "sans-serif"],
      'oswald': ["Oswald", "sans-serif"],
      'roboto': ["Roboto", "sans-serif"],
      'body-heading':["Oswald", "sans-serif"],
      'body-text':["Roboto", "sans-serif"],
      "foldit": ["Foldit", "sans-serif"],
      "saira": ["Saira_Stencil_One" , "cursive"],
      "tomorrow": ["Tomorrow", "sans-serif"],
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
        },
        width: {
          DEFAULT: "100%",
          sm: "90%",
          md: "768px",
          lg: "1024px",
          xl: "1117px",
          "2xl": "1117px",
          
        },
      },
      flex: {
        1: "1 1 0%",
        2: "2 2 0%",
        3: "3 3 0%",
      }
    },
    zIndex: {
      "-1": "-1",
      0: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50",
      auto: "auto",
      100: "100",
    },
    screens: {
      'sm': '90%',
      'md': '768px',
      'lg': '960px',
      'xl': '1024px',
      '2xl': '1200px',
      '3xl': '1320px',
    },
    extends: {
        gridTemplateColumns: {
          "grid-cols-1": "repeat(1, minmax(0, 1fr))",
          "grid-cols-2": "repeat(2, minmax(0, 1fr))",
          "grid-cols-3": "repeat(3, minmax(0, 1fr))",
          "grid-cols-4": "repeat(4, minmax(0, 1fr))",
          "grid-cols-5": "repeat(5, minmax(0, 1fr))",
          "grid-cols-6": "repeat(6, minmax(0, 1fr))",
          "grid-cols-7": "repeat(7, minmax(0, 1fr))",
          "grid-cols-8": "repeat(8, minmax(0, 1fr))",
          "grid-cols-9": "repeat(9, minmax(0, 1fr))",
          "grid-cols-10": "repeat(10, minmax(0, 1fr))",
          "grid-cols-11": "repeat(11, minmax(0, 1fr))",
          "grid-cols-12": "repeat(12, minmax(0, 1fr))",
          "grid-cols-1-2": "1fr 2fr"
      },
      backgroundImage: {
        'hero-radial': `conic-gradient(from 225deg, var(${colors.primary}), var(${colors.secondary}))`,
      }

    }
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
};

