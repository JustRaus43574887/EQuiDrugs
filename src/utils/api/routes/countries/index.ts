import axiosInstance from "~utils/axiosInstance";
import { Country, ListParams } from "./types";

export const list = ({ lang }: ListParams) =>
  axiosInstance.get<Country[]>(`/countries/list?lang=${lang}`);
