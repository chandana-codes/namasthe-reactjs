import React from "react";

class UserClass extends React.Component {
  constructor() {
    super();

    this.state = {
      userInfo: {
        name: "User",
        location: "Default",
        avatar_url: "https://avatars.githubusercontent.com/u/84772049?v=4",
      },
    };

    // console.log("Child Constructor");
  }

  async componentDidMount() {
    // console.log("Child Component Did Mount");

    const data = await fetch("https://api.github.com/users/chandana-codes");
    const json = await data.json();

    this.setState({ userInfo: json });

    console.log(json);
  }

  componentDidUpdate() {}

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // console.log("Child Render");

    return (
      <div className="userCard">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: gowrichandana.gadi@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
