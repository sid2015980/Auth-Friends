import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriend = () => {
  const dispatch = useDispatch();
  return (
    <div className="AddFriends">
      <Formik
        initialValues={{ name: "", age: "", email: "" }}
        onSubmit={(values, { resetForm }) => {
          const { name, age, email } = values;
          const obj = {
            id: new Date().toLocaleTimeString(),
            name,
            age,
            email,
          };
          dispatch({ type: "FETCHING_NEW_FRIEND" });
          axiosWithAuth()
            .post("/api/friends", obj)
            .then((res) => {
              console.log("new friends ", res);
              dispatch({ type: "ADDING_NEW_FRIEND", payload: res.data });
            })
            .catch((err) => {
              console.log(err);
              dispatch({ type: "NEW_ERROR", payload: err });
            });
          resetForm();
        }}
      >
        {() => (
          <Form>
            <label htmlFor="name">
              <Field type="text" name="name" id="name" placeholder="name" />
            </label>
            <label htmlFor="age">
              <Field type="text" name="age" id="age" placeholder="age" />
            </label>
            <label htmlFor="email">
              <Field type="email" name="email" id="email" placeholder="email" />
            </label>
            <div className="btn-add">
              <button type="submit">Add Friend</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddFriend;