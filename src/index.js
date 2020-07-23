
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import SeasonDisplay from './SeasonDisplay'
import Loader from './Loader'
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
  // constructor(props) {
  //    super(props);
  //    // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT to this.state 
  //    //now we init state object- null = we don't know what the latitude is yet.
  //    this.state ={ lat: null, errorMessage:'' };
  //    //better to put the function when we call the app
  //   //  window.navigator.geolocation.getCurrentPosition(

  //   //   // (position) => console.log(position),
  //   //   //we want to take latitude out of position object and using alone in state object above- so we use seState and we pass the object that has the update state that we want to make - in this case we want to use position object to update lat property 
  //   //   // we call setState to update state object
  //   //    (position) => {
  //   //     this.setState({ lat: position.coords.latitude
  //   //     })
  //   //    },

  //   //   (err) =>{
  //   //     //  console.log(err);
  //   //     this.setState({
  //   //       errorMessage: err.message
  //   //     })
  //   //   }
  //   // );
  // }
  //Babeljs.io
  state = {
    lat: null,
    errorMessage:''
  }
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
       (position) => 
        this.setState({ lat: position.coords.latitude }),

      (err) => this.setState({ errorMessage: err.message })
      
    );

  }
  // first function
  // componentDidMount(){
  //   console.log('i had a go');
  // }
  // componentDidUpdate(){
  //   console.log('I am updated');
  // }
  render() {
   //render func keep updating  so better to not having functions here
    // return (
    //   <div>
    //     Latitude:{this.state.lat}<br/>
    //     Error: {this.state.errorMessage}
    //   </div>
    // )

    if(this.state.errorMessage  && !this.state.lat){
      return (
      <div>
         Error: {this.state.errorMessage}
      </div>
      )
    }
    if( !this.state.errorMessage  && this.state.lat){
      return (
      <div>
         {/* Latitude:{this.state.lat} */}
         <SeasonDisplay lat={this.state.lat}/>
      </div>
      )
    }
    // if( !this.state.errorMessage  && !this.state.lat){
    //   return (
    //   <div>
    //      loading ...
    //   </div>
    //   )
    // }
    return(
      
        <Loader message="Please accept location request"/>
     
    )
  }

}

export default App;

ReactDOM.render(<App />, document.querySelector('#root'))