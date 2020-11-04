import axiosInstance from "./axiosConf";

export const getBannerRequest = () => {
  return axiosInstance.get("/banner");
};

export const getRecommendListRequest = () => {
  return axiosInstance.get("/personalized");
};

export const getHotSingerListRequest = (count) => {
  return axiosInstance.get(`/top/artists?offset=${count}&limit=15`);
};

export const getSingerListRequest = (category, alpha, count) => {
  return axiosInstance.get(
    `/artist/list?area=${category}&initial=${alpha.toLowerCase()}&offset=${count}&limit=15`
  );
};

export const getRankListRequest = () => {
  return axiosInstance.get(`/toplist/detail`);
};
