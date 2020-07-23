import React from 'react'


//function for finding the season
const getSeason =( lat, month)=>{
 if(month > 2&& month<9 ){
  return lat > 0 ? 'summer' : 'winter';
 } else {
  return lat > 0 ? 'winter' : 'summer';
 }

}


const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth())

  return (
    <div>
     season is  {season}
    </div>
  )
}

export default SeasonDisplay;
