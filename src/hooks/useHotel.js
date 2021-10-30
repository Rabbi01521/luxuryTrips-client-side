import { useEffect, useState } from "react";

const useHotel = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetch("https://shielded-woodland-51760.herokuapp.com/hotel")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);
  return [hotels, setHotels];
};

export default useHotel;
