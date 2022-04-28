import axiosInstance from "~utils/axiosInstance";
import { MedicamentName, SearchParams } from "./types";

export const search = ({
  country_code,
  query,
  skip = 0,
  size = "20",
}: SearchParams) =>
  axiosInstance.get<MedicamentName[]>(
    `/medicaments/search?country_code=${country_code}&query=${query}&skip=${skip}&size=${size}`
  );
