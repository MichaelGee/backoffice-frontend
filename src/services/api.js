import axios from "axios";
import apisauce from "apisauce";

const create = () => {
  // create an axios instance
  const axiosInstance = axios.create({
    baseURL: "https://api.github.com",
    headers: {
      "x-api-key": "",
    },
  });
  const api = apisauce.create({ axiosInstance });

  // retry api calls on failure
  axiosRetry(api.axiosInstance, {
    retries: 3,
    shouldResetTimeout: true,
    retryDelay: (retryCount) => {
      return retryCount * 1000; // time interval between retries
    },
    retryCondition: (response) => {
      return (
        response.code === "ECONNABORTED" ||
        ["get", "head", "options", "delete", "put"].includes(response.config.method) ||
        (response.response &&
          [100, 199, 400, 401, 403, 429, 500, 599, 404].includes(response.response.status))
      );
    },
  });

  //Create api calls here

  return;
};

const api = create();
export default api;
