import React from "react";
import getEarthquakes from "./services";

export default function useEarthquakesFetcher(startTime: string, endTime: string): any[] {
  const [earthquakes, setEarthquakes] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setError(false);

    const fetchEarthquakes = async () => {
      try {
        const data = await getEarthquakes(startTime, endTime);
        setEarthquakes(data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };

    fetchEarthquakes();
  }, [startTime, endTime]);

  return [earthquakes, loading, error];
}
