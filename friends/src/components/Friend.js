import React from "react";

const Friend = ({ obj, removeFriend }) => {
  return (
    <div className="Friends">
      <h3>
        {" "}
        name:
        <span>{obj.name}</span>
      </h3>
      <p>
        {" "}
        age:
        <span>{obj.age}</span>
      </p>
      <p>
        email:
        <span>{obj.email}</span>
      </p>
      <div className="remove-btn">
        <button onClick={() => removeFriend(obj)}>remove</button>
      </div>
    </div>
  );
};

export default Friend;