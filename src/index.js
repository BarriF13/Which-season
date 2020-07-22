import React from 'react'
import ReactDOM from 'react-dom'

//for deciding the season weather we need the latitude of the user
const App = () => {
  //making a call to the api
  
  window.navigator.geolocation.getCurrentPosition(
    //to get the user location we need to set to separate function call back
    //call back one success
    (position)=>console.log(position),
    // second call back -failure 
    (err)=>console.log(err)
  );
  return (
    <div>
    {/* latitude: {this.position} */}
    Latt:
    </div>
  )
}

export default App;

ReactDOM.render(<App/>, document.querySelector('#root'))