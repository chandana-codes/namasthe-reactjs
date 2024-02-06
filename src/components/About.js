import User from "./User";
import UserClass from "./Userclass";
import { Component } from "react";

class About extends Component {
  constructor() {
    super();
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>Namasthe React Webseries</h2>
        <UserClass name={"Gowri Chandana Gadi"} location={"Kakinada"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>Namasthe React Webseries</h2>
//       {/* <User /> */}
//       <UserClass />
//     </div>
//   );
// };

export default About;
