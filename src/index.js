
import React, { Component } from 'react'

import ReactDOM from 'react-dom'

//for deciding the season weather we need the latitude of the user
// const App = () => {
//   //making a call to the api

//   window.navigator.geolocation.getCurrentPosition(
//     //to get the user location we need to set to separate function call back
//     //call back one success
//     (position)=>console.log(position),
//     // second call back -failure 
//     (err)=>console.log(err)
//   );
//   return (
//     <div>
//     {/* latitude: {this.position} */}
//     Latt:
//     </div>
//   )
// }
class App extends Component {
  constructor(props) {
     super(props);
     // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT to this.state 
     //now we init state object- null = we don't know what the latitude is yet.
     this.state ={ lat: null, errorMessage:'' };
     //better to put the function when we call the app
     window.navigator.geolocation.getCurrentPosition(

      // (position) => console.log(position),
      //we want to take latitude out of position object and using alone in state object above- so we use seState and we pass the object that has the update state that we want to make - in this case we want to use position object to update lat property 
      // we call setState to update state object
       (position) => {
        this.setState({ lat: position.coords.latitude
        })
       },

      (err) =>{
        //  console.log(err);
        this.setState({
          errorMessage: err.message
        })
      }
    );
  }

  render() {
   //render func keep updating  so better to not having functions here
    return (
      <div>
        Latitude:{this.state.lat}<br/>
        Error: {this.state.errorMessage}
      </div>
    )
  }

}

export default App;

ReactDOM.render(<App />, document.querySelector('#root'))