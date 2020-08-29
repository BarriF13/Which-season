import { useState, useEffect } from 'react';


export default () => {
  const [lat, setLat] = useState(null)
  const [errorMessage, setErrorMessage] = useState('');
  //by passing empty array in the end of the useEffect function it means we only want to run the function once in total of the lifecycle method of this component 
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => setLat(position.coords.latitude),
      (err) => setErrorMessage(err.message)
    );
  }, []);

  return  [ lat, errorMessage];
};