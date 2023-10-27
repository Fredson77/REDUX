import React from "react";
import { useSelector } from "react-redux";

const User = () => {

  const user = useSelector((state) => state.userReducer)

  return (
    <div className="user-container">
      <div className="user">
        <h3>{ user.pseudo }</h3>
        <img src="./img/bill-gates.png" alt="bill gates" />
        <p>Age : { user.age } ans</p>
        <p>Like{ user.likes > 1 ? 's' : '' } : { user.likes }</p>
      </div>
    </div>
  );
};

export default User;