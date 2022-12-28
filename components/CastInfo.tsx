import { Avatar, Typography } from "@mui/material";
import { FC } from "react";
import theme from "../config/theme";
import { FlexBox } from "../styles/components/FlexBox";
import { ShowInfo } from "./ShowInfo";

interface Props {
  person: string;
  character: string;
  image?: string;
}

export const CastInfo: FC<Props> = (props) => {
  const { person, character, image } = props;

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
      <Avatar alt={person} src={image} sx={{ width: 30, height: 30 }} />
      <Typography
        variant="p1"
        sx={{
          width: "150px",
          marginLeft: "13px",
          color: theme.palette.primary.light,
        }}
      >
        {person}
      </Typography>
      <Typography
        variant="p1"
        sx={{ color: theme.palette.primary.light, opacity: "40%" }}
      >
        {character}
      </Typography>
    </FlexBox>
  );
};
