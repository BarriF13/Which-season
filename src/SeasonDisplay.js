import React from 'react'

// refactoring 
const seasonConfig = {
  summer: {
    text: ' Lovely summer time',
    iconName: 'sun'
  },
  winter:{
    text: 'Good god, it is chilly',
    iconName: 'snowflake'
  }
};

//function for finding the season
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }

};


const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {text, iconName } = seasonConfig[season] // {text , iconName}
  return (
    <div>
      <i className={`${iconName} icon`}/>
      <h1 style={{ color: 'red' }}>{text}</h1>
      <i className={`${iconName} icon`}/>
    </div>
  );
};

export default SeasonDisplay;
