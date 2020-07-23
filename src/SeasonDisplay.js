import React from 'react'


//function for finding the season
const getSeason =( lat, month)=>{
 if(month > 2&& month<9 ){
  return lat > 0 ? 'summer' : 'winter';
 } else {
  return lat > 0 ? 'winter' : 'summer';
 }

};


const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth())

  return (
    <div>
    <h1 style={{color: 'red'}}>{season === 'winter' ? 'Good god, it is chilly': 'Lovely summer time'}</h1> 
    </div>
  );
};

export default SeasonDisplay;
