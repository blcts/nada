import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const TVBlandBox = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  padding: "25px 30px 80px",
  dispaly: "block",
  width: "100%",
}));
