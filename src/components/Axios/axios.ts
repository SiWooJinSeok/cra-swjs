import baseAxios from "axios";

const axios = baseAxios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});
export default axios;
