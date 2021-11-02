import React from "react";
import {NativeSelect, FormControl} from "@material-ui/core";
// eslint-disable-next-line no-unused-vars
import {useSelector, useDispatch} from "react-redux";

import {fetchCountries} from "../../api";
import styles from "./CountryPicker.module.scss";
import {SELECT_COUNTRY, fetchDataGlobalCountry} from "../../redux/actions";

//- Redux Version
const CountryPicker = () => {
  const [fetchedCountries, setFetchedCountries] = React.useState([]);

  const dispatch = useDispatch();
  //-Unnecessary - only form reading the Global State
  // const globalState = useSelector((state) => state);
  // console.log("globalState-CountryPicker:", globalState.data);

  React.useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, []);

  const handleChange = async (country) => {
    // console.log("onChange country:", country);
    dispatch(fetchDataGlobalCountry(country));
  };

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(event) => {
          dispatch({type: SELECT_COUNTRY, payload: event.target.value});
          // console.log("event.target.value:", event.target.value);
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
//   // console.log("fetchedCountries:", fetchedCountries);

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
