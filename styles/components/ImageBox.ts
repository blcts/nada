import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const ImageBox = styled(Box)<BoxProps>(({ theme }) => ({
  "&.MuiBox-root": {
    position: "relative",

    "& img": {
      objectFit: "contain",
    },
  },
}));
