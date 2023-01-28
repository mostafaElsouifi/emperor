const getAllRoutes = async () => {
  const allRoutes = await useFetch("/api/getRoutes");
  return allRoutes;
};

module.exports = getAllRoutes;
