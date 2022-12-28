import { Box, Typography } from "@mui/material";
import { Children, FC } from "react";
import { CastInfo } from "../../components/CastInfo";
import MainContainer from "../../components/MainContainer";
import { ShowInfo } from "../../components/ShowInfo";
import { Title } from "../../components/Title";
import theme from "../../config/theme";
import { FlexBox } from "../../styles/components/FlexBox";
import { TVBlandBox } from "../../styles/components/TVBlandBox";
import { Show } from "../../types/movie";
import { Person } from "../../types/person";
import { LayoutAPI } from "../api/layoutsAPI";

interface SheduleProps {
  movie: Show;
  cast: Person[];
}

const Show: FC<SheduleProps> = ({ movie, cast }) => {
  return (
    <Box
      sx={{ backgroundColor: theme.palette.primary.main, minHeight: "100vh" }}
    >
      <MainContainer keyword={`show ${movie.name}`}>
        <TVBlandBox>
          <Typography
            variant="h3"
            sx={{ color: theme.palette.primary.main, marginBottom: "66px" }}
          >
            TV Bland
          </Typography>
          <Title show={movie} />
        </TVBlandBox>
        <FlexBox
          sx={{
            marginTop: "130px",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <FlexBox sx={{ flexDirection: "column", width: "50%" }}>
            <ShowInfo title="Streamed On" value={movie.network?.name} />
            <ShowInfo title="Status" value={movie.status} />
            <ShowInfo title="Genres" value={movie.genres.join(", ")} />
          </FlexBox>
          <FlexBox
            sx={{ flexDirection: "column", width: "50%", marginRight: "24px" }}
          >
            {Children.toArray(
              cast.map((human) => (
                <CastInfo
                  person={human.person.name}
                  character={human.character.name}
                  image={human.person.image?.original}
                />
              ))
            )}
          </FlexBox>
        </FlexBox>
      </MainContainer>
    </Box>
  );
};

export default Show;

export async function getServerSideProps({ params }: any) {
  const movie = await LayoutAPI.shows(params.id);
  const cast = await LayoutAPI.cast(params.id);

  return {
    props: { movie, cast },
  };
}
