import { Children, FC } from "react";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/MainContainer";
import { LayoutAPI } from "./api/layoutsAPI";
import Movie from "../components/Movie";
import { TMovie } from "../types/movie";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import theme from "../config/theme";
import { LastShowsBox } from "../styles/components/LastShowsBox";
import { TVBlandBox } from "../styles/components/TVBlandBox";

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
          <Typography variant="h4" sx={{ color: theme.palette.primary.main }}>
            Last Added Shows
          </Typography>
        </TVBlandBox>

        <LastShowsBox>
          {Children.toArray(movies.map((mov) => <Movie mov={mov} />))}
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
