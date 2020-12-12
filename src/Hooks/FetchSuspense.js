import PromiseWrapper from "../Utils/PromiseWrapper";

import axios from "axios";

const makeFetch = (url) => {
  return new Promise(async (resolve) => {
    const total = await axios.get(url);
    resolve(total);
  });
};
const FetchSuspense = (url) => {
  return { resource: PromiseWrapper(makeFetch(url)) };
};

export default FetchSuspense;
