import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendForm = () => {
  const history = useHistory();
  return (
    <div className="Form">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, { resetForm }) => {
          axiosWithAuth()
            .post("/api/login", values)
            .then((res) => {
              localStorage.setItem("token", JSON.stringify(res.data.payload));
              history.push("/friends");
            })
            .catch((err) => {
              console.log(err);
            });
          resetForm();
        }}
      >
        {() => (
          <Form>
            <label htmlFor="username">
              <Field
                type="text"
                name="username"
                id="username"
                placeholder="username"
              />
            </label>
            <label htmlFor="password">
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
            </label>
            <div className="btn">
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FriendForm;