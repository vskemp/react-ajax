import React from 'react';
// import logo from './logo.svg';
import './App.css';



import axios from 'axios';
const API_ENDPOINT= 'https://swapi.co/api/people/1/';

// axios.get(API_ENDPOINT)
//     .then(response => {
//         console.log(response.data);
//     })


// without axios, just fetch
// fetch(API_ENDPOINT)
//     .then(r => r.json())
//     .then(data => {
//         console.log(data);
//     })

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'not their real name'
    }
  }

  componentDidMount() {
    //thi sis the method that react calls after the ocmponent has been attacked ot the DOM as a real element 
    // this is the first react method that is safe to call this.setState
        axios.get(API_ENDPOINT)
      .then(response => {
          console.log(response.data.name);
          // name = response.data.name;
          this.setState({
            name: response.data.name
          })
      })
  }

  render() {
    // axios.get(API_ENDPOINT)
    //   .then(response => {
    //       console.log(response.data.name);
    //       name = response.data.name;
    //   })
      
    return (
      <div className="App">
        <header className="App-header">
          {this.state.name}
        </header>
      </div>
    );
  }
}

export default App;
