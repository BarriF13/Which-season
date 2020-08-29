import React from 'react'
import './SeasonDisplay.css'
// refactoring 
const seasonConfig = {
  summer:{
    text: 'Lovely summer time',
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
  const {text, iconName } = seasonConfig[season];// {text , iconName}
  return (
    <div className={`season-display ${text}`}>
      <i className={`icon-left massive ${iconName} icon`}/>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}/>
    </div>
  );
};

export default SeasonDisplay;
