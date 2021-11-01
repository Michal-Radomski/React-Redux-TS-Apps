import React from "react";
import {NativeSelect, FormControl} from "@material-ui/core";
import {useSelector, useDispatch} from "react-redux";

import {fetchCountries} from "../../api";
import styles from "./CountryPicker.module.scss";
import {SELECT_COUNTRY, fetchDataGlobal, FETCH_DATA_GLOBAL} from "../../redux/actions";

//- Redux Version
const CountryPicker = () => {
  const [fetchedCountries, setFetchedCountries] = React.useState([]);
  const [country, setCountry] = React.useState("");

  console.log(country);

  const globalState = useSelector((state) => state.data);
  console.log("globalState-CountryPicker:", globalState.selectedCountry);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, []);
  // console.log(fetchedCountries);

  function handleChange(event) {
    setCountry(event.target.value);
    dispatch({type: SELECT_COUNTRY, payload: event.target.value}).then((payload) => {
      console.log(globalState.selectedCountry);
      console.log(payload);
    });

    fetchDataGlobal(globalState.selectedCountry);
    dispatch({
      type: FETCH_DATA_GLOBAL,
      payload: {
        confirmed: globalState.data.confirmed,
        recovered: globalState.data.recovered,
        deaths: globalState.data.deaths,
        lastUpdate: globalState.data.lastUpdate,
      },
    });
  }

  return (
    <FormControl className={styles.formControl}>
      {/* <NativeSelect defaultValue="" onChange={(event) => dispatch({type: SELECT_COUNTRY, payload: event.target.value})}> */}
      <NativeSelect defaultValue="" onChange={handleChange}>
        <option value="">Global</option>
        {fetchedCountries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;

//+ No Redux Version
// const CountryPicker = ({handleCountryChange}) => {
//   const [fetchedCountries, setFetchedCountries] = React.useState([]);

//   React.useEffect(() => {
//     const fetchAPI = async () => {
//       setFetchedCountries(await fetchCountries());
//     };
//     fetchAPI();
//   }, []);
//   // console.log(fetchedCountries);

//   return (
//     <FormControl className={styles.formControl}>
//       <NativeSelect defaultValue="" onChange={(event) => handleCountryChange(event.target.value)}>
//         <option value="">Global</option>
//         {fetchedCountries.map((country, index) => (
//           <option key={index} value={country}>
//             {country}
//           </option>
//         ))}
//       </NativeSelect>
//     </FormControl>
//   );
// };

// export default CountryPicker;
