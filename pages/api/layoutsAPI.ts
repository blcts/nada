import { TMovie } from "../../types/movie";
import { axios } from "./axios";

export const shedule = async () => {
  try {
    const response: TMovie[] = await axios.get("/schedule");
    return response;
  } catch {
    return console.log("Cant get shedule");
  }
};

export const shows = () => {
  return axios.get(`/api#shows`);
};

export const LayoutAPI = {
  shedule,
  shows,
};
