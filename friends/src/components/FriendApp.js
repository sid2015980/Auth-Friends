import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "../protected/ProtectedRoute";
import Nav from "./Nav";
import FriendForm from "./FriendForm";
import FriendList from "./FriendList";

const FriendApp = () => {
  const logOut = () => {
    localStorage.clear();
  };
  return (
    <div className="FriendApp">
      <Nav logOut={logOut} />
      <Route exact path="/login" component={FriendForm} />
      <PrivateRoute exact path="/friends" component={FriendList} />
    </div>
  );
};

export default FriendApp;