import React from "react";
import {NativeSelect, FormControl} from "@material-ui/core";
import {useSelector, useDispatch} from "react-redux";

import {fetchCountries} from "../../api";
import styles from "./CountryPicker.module.scss";
import {SELECT_COUNTRY, fetchDataGlobal} from "../../redux/actions";

//- Redux Version
const CountryPicker = () => {
  const [fetchedCountries, setFetchedCountries] = React.useState([]);

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

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(event) => dispatch({type: SELECT_COUNTRY, payload: event.target.value})}>
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
