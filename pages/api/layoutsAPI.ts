import { TMovie } from "../../types/movie";
import { axios } from "./axios";

export const shedule = async () => {
  try {
    const response: TMovie[] = await axios.get("/schedule");
    return response;
  } catch {
    return console.log("Can't get shedule");
  }
};

export const shows = async (id: number) => {
  try {
    const response: TMovie = await axios.get(`/shows/${id}`);
    return response;
  } catch {
    return console.log("Can't get show");
  }
};

export const cast = async (id: number) => {
  try {
    const response: TMovie = await axios.get(`/shows/${id}/cast`);
    return response;
  } catch {
    return console.log("Can't get cast");
  }
};

export const LayoutAPI = {
  shedule,
  shows,
  cast,
};
