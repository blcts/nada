import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const LastShowsBox = styled(Box)<BoxProps>(({ theme }) => ({
  marginTop: "-50px",
  display: "flex",
  alignItems: "flex-start",
  flexWrap: "wrap",
  justifyContent: "space-around",
  minWidth: "210px",
}));
