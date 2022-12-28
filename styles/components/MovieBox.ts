import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const MovieBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  margin: "0 10px 24px 10px",
  alignItems: "center",
  width: "210px",
  textAlign: "center",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: `1px 1px 7px lightGray`,
    backgroundColor: theme.palette.warning.main,
  },
}));
