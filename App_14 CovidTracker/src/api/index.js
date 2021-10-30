import axios from "axios";

const url = "https://covid19.mathdro.id/api";

// -Previous version of the function
// export const fetchData = async () => {
//   try {
//     const {
//       data: {confirmed, recovered, deaths, lastUpdate},
//     } = await axios.get(url);
//     // const modifiedData = {
//     //   confirmed: confirmed,
//     //   recovered: recovered,
//     //   deaths: deaths,
//     //   lastUpdate: lastUpdate,
//     // };
//     // return modifiedData;
//     // -The same as above
//     return {confirmed: confirmed, recovered: recovered, deaths: deaths, lastUpdate: lastUpdate};
//   } catch (error) {
//     return error;
//   }
// };

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: {confirmed, recovered, deaths, lastUpdate},
    } = await axios.get(changeableUrl);

    return {confirmed, recovered, deaths, lastUpdate};
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const {data} = await axios.get(`${url}/daily`);
    // console.log(data);
    // return data;
    const modifiedData = data.map(({confirmed, deaths, reportDate: date}) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date: date,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: {countries},
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
