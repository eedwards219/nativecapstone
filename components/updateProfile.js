import React from "react";
import { useFormik } from "formik";
import {
  Card,
  ListItem,
  Button,
  Icon,
  Header,
  View
} from "react-native-elements";

const UpdateProfile = props => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: ""
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <View>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="email">Email Address</label>

        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="phoneNumber">Phone Number</label>

        <input
          id="phoneNumber"
          name="phoneNumber"
          type="phoneNumber"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
        />
        <button type="submit">Submit</button>
      </form>
    </View>
  );
};
export default UpdateProfile;
