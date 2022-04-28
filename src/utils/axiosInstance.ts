import axios from "axios";
import { API_URL } from "@env";
// import * as SecureStore from "expo-secure-store";

const axiosInstance = axios.create({ baseURL: API_URL });

export default axiosInstance;
