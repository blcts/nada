import { Box } from "@mui/material";
import { FC } from "react";

export const NoImage: FC = () => {
  return (
    <Box
      sx={{
        background:
          "url(https://eu.leafletscdns.com/com.ua/img/no-img.jpg) no-repeat center center ",
        height: "100%",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    />
  );
};
