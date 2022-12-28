import { Typography } from "@mui/material";
import { FC } from "react";
import theme from "../config/theme";
import { FlexBox } from "../styles/components/FlexBox";

interface Props {
  title: string;
  value: string;
}

export const ShowInfo: FC<Props> = (props) => {
  const { title, value } = props;

  if (!value) return null;

  return (
    <FlexBox
      sx={{
        gap: "12px",
        paddingBottom: "20px ",
        borderBottom: " 1px solid black",
        marginLeft: "30px",
        marginBottom: "30px",
      }}
    >
      <Typography
        variant="p1"
        sx={{
          width: "150px",
          marginLeft: "13px",
          color: theme.palette.primary.light,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="p1"
        sx={{ color: theme.palette.primary.light, opacity: "40%" }}
      >
        {value}
      </Typography>
    </FlexBox>
  );
};
