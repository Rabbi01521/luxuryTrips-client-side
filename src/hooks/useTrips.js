import { useEffect, useState } from "react";

const useTrips = () => {
  const [trips, SetTrips] = useState([]);
  useEffect(() => {
    fetch("https://shielded-woodland-51760.herokuapp.com/trips")
      .then((res) => res.json())
      .then((data) => SetTrips(data));
  }, []);
  return [trips, SetTrips];
};

export default useTrips;
