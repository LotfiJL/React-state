import React, { Component } from "react";
import "./REG.css";
import { Container } from "react-bootstrap";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Lotfi Jellali",
        bio: "DJANGO",
        imgSrc:
          "https://th.bing.com/th/id/OIP.HOIlXTpgsOgqeP47jI6NJwHaFj?w=240&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.73",
        profession: "Supply chain Engineer",
      },
      shows: true,
      count: 0,
    };
  }

  IMG = () => {
    this.setState({
      shows: !this.state.shows,
    });
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1,
        };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Container>
        <div className="All">
          <h1>Lotfi Jellali</h1>
          {this.state.shows === true ? (
            <img src={this.state.person.imgSrc}></img>
          ) : (
            <p>"GOMYCODE"</p>
          )}
          <button onClick={this.IMG}>Click Me</button>

          <h2>{this.state.count}</h2>
        </div>
      </Container>
    );
  }
}
