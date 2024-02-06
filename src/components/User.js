import { useEffect } from "react/cjs/react.production.min";

const User = () => {
  useEffect(() => {
    // API call
  }, []);

  async function getUserInfo() {
    const data = await fetch("");
  }

  return (
    <div className="userCard">
      <h2>Name: Gowri Chandana Gadi</h2>
      <h3>Location: East Godavari</h3>
      <h4>Contact: gowrichandana.gadi@gmail.com</h4>
    </div>
  );
};

export default User;
