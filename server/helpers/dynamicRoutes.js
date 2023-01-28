const axios = require("axios");
const getAllRoutes = async () => {
  const allRoutes = await axios.get(
    "https://emperorshaheen.herokuapp.com/api/getRoutes",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return allRoutes;
};

module.exports = getAllRoutes;
