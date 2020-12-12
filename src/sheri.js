import axios from "axios";
export function fetchCountriesData() {
  return { countries: wrapPromise(fetchAndSetData()) };
}

function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

const fetchAndSetData = () => {
  return new Promise(async (resolve) => {
    const { data } = await axios.get(
      "https://corona.lmao.ninja/v2/countries?yesterday&sort"
    );
    const total = await axios.get("https://corona.lmao.ninja/v2/all?yesterday");
    const countriesObj = {};
    countriesObj["All"] = { ...total.data };
    data.map((val) => {
      return (countriesObj[val.country] = { ...val });
    });
    resolve(countriesObj);
  });
};
