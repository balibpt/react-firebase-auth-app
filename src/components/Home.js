import React from "react";
import { useUserAuth } from "../context/UserAuthContext";

export default function Home() {
  const { user, logOut } = useUserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <React.Fragment>
      <div className="container mx-auto px-4 py-6">
        <h1>Home Page</h1>
        <p>{user.email}</p>
        <button onClick={handleLogOut}>Logout</button>
      </div>
    </React.Fragment>
  );
}
