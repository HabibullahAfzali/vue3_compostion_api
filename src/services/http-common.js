import axios from "axios";

const httpCommon = axios.create({
  baseURL: "http://localhost:8081/user",
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpCommon;
