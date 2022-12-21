import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const TVBlandBox = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  padding: "80px 30px",
  dispaly: "block",
  width: "100%",
}));
