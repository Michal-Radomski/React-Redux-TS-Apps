import axios from "axios";

const url: string = "https://covid19.mathdro.id/api";

//+ Previous version of the function (No Redux version)
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

//+ No Redux Version
// export const fetchData = async (country) => {
//   let changeableUrl = url;

//   if (country) {
//     changeableUrl = `${url}/countries/${country}`;
//   }
//   try {
//     const {
//       data: {confirmed, recovered, deaths, lastUpdate},
//     } = await axios.get(changeableUrl);

//     return {confirmed, recovered, deaths, lastUpdate};
//   } catch (error) {
//     console.log(error);
//   }
// };

//+ No Redux Version -> fetchDailyData in not in global redux state
export const fetchDailyData = async () => {
  try {
    const {data}: Fetch = await axios.get(`${url}/daily`);
    // console.log(data);
    // return data;
    const modifiedData = data.map(({confirmed, deaths, reportDate: date}: ModifiedData) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date: date,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

//+ No Redux Version -> fetchCountries not in global redux state
export const fetchCountries = async () => {
  try {
    const {
      data: {countries},
    } = await axios.get(`${url}/countries`);

    return countries.map((country: {name: string}) => country.name);
  } catch (error) {
    console.log(error);
  }
};
