import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    p1: React.CSSProperties;
    p2: React.CSSProperties;
    p3: React.CSSProperties;
    p4: React.CSSProperties;
    lable: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    p1?: React.CSSProperties;
    p2?: React.CSSProperties;
    p3?: React.CSSProperties;
    p4?: React.CSSProperties;
    lable?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    p1: true;
    p2: true;
    p3: true;
    p4: true;
    lable: true;
  }
}

const theme = createTheme({
  palette: {
    success: {
      main: "#539713",
      light: "#B2D0AD",
      dark: "#856B29",
    },
    warning: {
      main: "#F08E5B",
      dark: "#723A3A",
    },
    error: {
      main: "#EE5E5E",
      light: "#C69393",
    },
    secondary: {
      main: "#D4CCF1",
      dark: "#5D5D67",
    },
    info: {
      main: "#69B0FF",
      light: "#D9E7F8",
      dark: "#3943A1",
    },
    primary: {
      main: "#F1F2F1",
      light: "#FFFFFF",
      dark: "#1D283A",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    h1: {
      fontWeight: 700,
      fontSize: "56px",
      lineHeight: "84px",
      letterSpacing: "0.03em",
      textTransform: "uppercase",
    },
    h2: {
      fontWeight: 700,
      fontSize: "48px",
      lineHeight: "72px",
      textTransform: "uppercase",
    },
    h3: {
      fontWeight: 700,
      fontSize: "36px",
      lineHeight: "54px",
    },
    h4: {
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "36px",
    },
    h5: {
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "25px",
    },
    p1: {
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "31px",
    },
    p2: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "25px",
    },
    p3: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "22px",
    },
    p4: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "18.6px",
      opacity: "80% !important",
    },
    lable: {
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: "27px",
      letterSpacing: "0.03em",
      textTransform: "uppercase",
      opacity: 0.5,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          p1: "subtitle1",
          p2: "subtitle2",
          p3: "body1",
          p4: "body2",
          lable: "caption",
        },
      },
    },
  },
});

export default theme;
