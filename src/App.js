import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    person: {
      fullName: "Foulen Ben Foulen",
      bio: "Sira thatiya",
      imgSrc: logo,
      profession: "Mrammagi",
    },
    shows: false,
    mountingTime:null,
    timeSinceMounting:null,
  };
  componentDidMount() {
    this.setState({mountingTime:new Date()})

    setInterval(() => {
      
      this.setState(() => ({
        timeSinceMounting: Math.floor((new Date() - this.state.mountingTime)/1000)
      }));
    }, 1000);
  }

  toggle = (k) => {
      k.preventDefault();
      this.setState({shows: !this.state.shows})
      //this.setState((prevState) => ({shows: !prevState.shows}))
  }
  render() {
    //console.log(this.props)
    console.log(this.state)

    return (
      <div className="App">
        <div>
          <button onClick={this.toggle} className="btn">toggle</button>
        </div>
        {/* {this.state.shows ? 'you see me' : null} */}
        {this.state.shows ? (
          <div className="App">
            <div className="name">
              Name : {this.state.person.fullName}
            </div>
            <div className="bio">
              Bio : {this.state.person.bio}
            </div>
            <div className="profession">
              Profession : {this.state.person.profession}
            </div>
            <div className="image">
              <img src={this.state.person.imgSrc} className="App-logo" />
            </div>
            <div className="sinceMounting">
              Time since mounting : {this.state.timeSinceMounting} seconds
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
export default App;
