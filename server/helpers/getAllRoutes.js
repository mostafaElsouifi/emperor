import * as axios from "axios";

const getAllRoutes = async () => {
  return await axios.get("https://emperorshaheen.herokuapp.com/api/getRoutes");
};

module.exports = getAllRoutes;
