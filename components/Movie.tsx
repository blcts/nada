import { Rating, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import theme from "../config/theme";
import { LayoutAPI } from "../pages/api/layoutsAPI";
import { ImageBox } from "../styles/components/ImageBox";
import { MovieBox } from "../styles/components/MovieBox";
import { TMovie } from "../types/movie";
import { NoImage } from "./NoImage";

export interface Props {
  mov: TMovie;
}

const Movie: FC<Props> = ({ mov }) => {
  return (
    <MovieBox>
      <ImageBox sx={{ height: "293px", margin: "10px 0" }}>
        {mov.show.image ? (
          <Image
            alt={mov.show.name}
            src={mov.show.image.original}
            height={293}
            width={200}
          />
        ) : (
          <NoImage />
        )}
      </ImageBox>
      <Rating
        name="read-only"
        value={
          mov.show.rating.average ? Math.round(mov.show.rating.average / 2) : 0
        }
        readOnly
      />
      <Typography
        variant="h6"
        sx={{
          wordBreak: "break-word",
          textAlign: "center",
          color: theme.palette.primary.light,
          textDecoration: "none !important",
        }}
      >
        {mov.show.name}
      </Typography>
    </MovieBox>
  );
};

export default Movie;

export async function getServerSideProps({ movie }: { movie: TMovie }) {
  const mov = await LayoutAPI.shows(movie.id);

  return {
    props: { mov },
  };
}
