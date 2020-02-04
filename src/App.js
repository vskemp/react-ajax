import React from 'react';
import logo from './logo.svg';
import './App.css';



import axios from 'axios';
const API_ENDPOINT= 'https://swapi.co/api/people/1/';


function urlForId(id) {
  return `https://swapi.co/api/people/${id}/`;
}
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
      name: '',
      currentId: 1
    }
  }

  componentDidMount() {
    //this is the method that react calls after the ocmponent has been attacked ot the DOM as a real element 
    // this is the first react method that is safe to call this.setState
      //   axios.get(urlForId(this.state.currentId))
      // .then(response => {
      //     console.log(response.data.name);
      //     // name = response.data.name;
      //     this.setState({
      //       name: response.data.name
      //     })
      // })
      this._makeAjaxRequest();
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
          {
          this.state.name ? // || <img src={logo} /> //
            this.state.name
            :
            <img src={logo} />
          }
          <button onClick={this._getNextCharacter}>Next</button>
        </header>
      </div>
    );
  }

  _getNextCharacter = () => {
    this.setState({
      currentId: this.state.currentId + 1
    }, () => {
      console.log(`New currentId is ${this.state.currentId}`);
      this._makeAjaxRequest();
    });
  }

  _makeAjaxRequest = () => {
    axios.get(urlForId(this.state.currentId))
    .then(response => {
        console.log(response.data.name);
        // name = response.data.name;
        this.setState({
          name: response.data.name
        })
    })
  }
}

export default App;
