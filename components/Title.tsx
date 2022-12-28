import { Box, BoxProps, Rating, styled, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import theme from "../config/theme";
import { FlexBox } from "../styles/components/FlexBox";
import { ImageBox } from "../styles/components/ImageBox";
import { Show } from "../types/movie";
import { NoImage } from "./NoImage";

interface Props {
  show: Show;
}

export const Title: FC<Props> = (props) => {
  const { show } = props;
  return (
    <FlexBox
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 3fr 1fr",
        gap: "24px",
      }}
    >
      <ImageBox sx={{ margin: "-24px 0 -120px" }}>
        {show.image ? (
          <Image alt={show.name} src={show.image.original} fill />
        ) : (
          <NoImage />
        )}
      </ImageBox>

      <FlexBox sx={{ flexDirection: "column" }}>
        <FlexBox sx={{ alignItems: "center" }}>
          <Rating
            name="read-only"
            value={
              show.rating.average ? Math.round(show.rating.average / 2) : 0
            }
            readOnly
          />

          <Typography variant="p1" sx={{ color: theme.palette.primary.light }}>
            {`${show.rating.average ? show.rating.average / 2 : 0}/5`}
          </Typography>
        </FlexBox>
        <Typography variant="h1" sx={{ color: theme.palette.warning.main }}>
          {show.name}
        </Typography>
        <Typography variant="h4" sx={{ color: theme.palette.primary.light }}>
          {show.summary ? show.summary.replace(/<.*?>/g, "") : ""}
        </Typography>
      </FlexBox>
    </FlexBox>
  );
};
