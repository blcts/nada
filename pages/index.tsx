import { Children, FC } from "react";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/MainContainer";
import { LayoutAPI } from "./api/layoutsAPI";
import Movie from "../components/Movie";
import { TMovie } from "../types/movie";
import { Typography } from "@mui/material";
import theme from "../config/theme";
import { LastShowsBox } from "../styles/components/LastShowsBox";
import { TVBlandBox } from "../styles/components/TVBlandBox";
import { NextLink } from "../styles/components/NextLink";

interface SheduleProps {
  movies: TMovie[];
}

const Shedule: FC<SheduleProps> = ({ movies }) => {
  return (
    <div className={styles.container}>
      <MainContainer keyword="main page">
        <TVBlandBox>
          <Typography
            variant="h3"
            sx={{ color: theme.palette.primary.main, marginBottom: "66px" }}
          >
            TV Bland
          </Typography>
          <Typography variant="h4" sx={{ color: theme.palette.warning.main }}>
            Last Added Shows
          </Typography>
        </TVBlandBox>

        <LastShowsBox sx={{ backgroundColor: theme.palette.primary.main }}>
          {Children.toArray(
            movies.map((mov) => (
              <NextLink href={`/shows/${mov.show.id}`}>
                <Movie mov={mov} />
              </NextLink>
            ))
          )}
        </LastShowsBox>
      </MainContainer>
    </div>
  );
};

export default Shedule;

export async function getStaticProps() {
  const movies = await LayoutAPI.shedule();

  return {
    props: { movies },
  };
}
