import { extendTheme } from "@chakra-ui/react";

export const Theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        backgroundColor: "#20202A",
        fontFamily: "Satoshi",
      },
    }),
  },
  colors: {
    primary: {
      red: "#F72F46",
      yellow: {
        500: "#E84E60",
        400: "#EE7E8B",
      },
      white: {
        700: "#FFFFFF",
        50: "#8C8B8F",
        25: "#525155",
      },
      gray: "#F8F8F8",
    },
    text: {
      gray: "#EEEEEE",
      white: "#FFFFFF",
      red: "#F72F46",
      error: "#EA171E",
    },
    background: {
      dark: "#20202A",
      gray: "#F1F1F1",
      red: "#FA4F62",
    },
    gray: {
      950: "#18171E",
      900: "#20202A",
      800: "#2D2D39",
      700: "#393848",
      500: "#434458",
      300: "#717286",
      200: "#8989A3",
      100: "#B7B8CC",
      60: "#1E1D25",
      35: "#1B1A22",
      10: "#19181F",
      5: "#19181F",
    },
  },
  components: {
    Button: {
      variants: {
        outline: {
          bg: "transparent",
          border: "1px solid",
          borderColor: "#636172",
          borderRadius: "10px",
          color: "#ADAEC1",
          fontSize: "14px",
          fontWeight: 500,
        },
        solid: {
          bg: "#F72F46",
          color: "#fff",
          fontSize: "14px",
          fontWeight: "600",
          borderRadius: "10px",
        },
      },
    },
  },
});
