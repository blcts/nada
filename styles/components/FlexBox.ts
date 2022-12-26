import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const FlexBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
}));
