import React from "react";
import {NativeSelect, FormControl} from "@material-ui/core";
import {useSelector, useDispatch} from "react-redux";

import {fetchCountries} from "../../api";
import styles from "./CountryPicker.module.scss";
import {SELECT_COUNTRY, fetchDataGlobal, fetchDataGlobalCountry} from "../../redux/actions";

//- Redux Version
const CountryPicker = () => {
  const [fetchedCountries, setFetchedCountries] = React.useState([]);
  // const [country, setCountry] = React.useState("");

  // console.log("country:", country);

  const globalState = useSelector((state) => state);
  console.log("globalState-CountryPicker:", globalState.data);
  fetchDataGlobal(globalState.selectedCountry);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, []);
  // console.log(fetchedCountries);

  const handleChange = async (country) => {
    // setCountry(event.target.value);
    // dispatch({type: SELECT_COUNTRY, payload: event.target.value});
    console.log("country:", country);
    dispatch(fetchDataGlobalCountry(country));
  };

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(event) => {
          dispatch({type: SELECT_COUNTRY, payload: event.target.value});
          // setCountry(event.target.value);
          console.log("event.target.value:", event.target.value);
          handleChange(event.target.value);
        }}
      >
        {/* <NativeSelect defaultValue="" onChange={handleChange}> */}
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
