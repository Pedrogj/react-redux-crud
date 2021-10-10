import axios from "axios";

// json-server db.json --port 4000

const clientAxios = axios.create({
  baseURL: "http://localhost:4000/",
});

export default clientAxios;
