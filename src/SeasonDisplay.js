import React from 'react'


//function for finding the season
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }

};


const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth())
  const text = season === 'winter' ? 'Good god, it is chilly' : 'Lovely summer time';
  const icon = season === ' winter'? 'snowflake' : 'sun';
  return (
    <div>
      <i className={`${icon} icon`}/>
      <h1 style={{ color: 'red' }}>{text}</h1>
      <i className={`${icon} icon`}/>
    </div>
  );
};

export default SeasonDisplay;
