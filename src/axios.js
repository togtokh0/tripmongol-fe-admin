import axios from "axios";
import { getCookie } from "./functions/cookie";
axios.defaults.baseURL = import.meta.env.VITE_APP_BACK_END_URL;
axios.defaults.headers.common["Authorization"] = "Bearer " + getCookie("token");
axios.defaults.headers.common["Accept-Language"] = "admin";
