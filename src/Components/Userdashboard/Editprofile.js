import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useFirestore } from "react-redux-firebase";
import Usernavbar from "../Navbar/Usernavbar";
const Editprofile = () => {
  const firestore = useFirestore();

  let history = useHistory();
  const { id } = useParams();
  const docRef = id ? firestore.collection("users").doc(id) : null;
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    about: "",
    status: "",
    experties: "",
    experience: "",
    image: "",

    isVerified: false,
  });
  const loadProfile = async () => {
    try {
      const result = await docRef.get();
      if (result.exists) {
        setProfile(result.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
  };
  useEffect(() => {
    if (id) {
      loadProfile();
    }
  }, [id]);
  const oninputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    if (id) {
      // update userprofile
      try {
        await docRef.update({
          ...profile,
          updatedAt: new Date(),
        });
        console.log("Document successfully updated!");
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    }
    history.push("/myprofile");
  };
  return (
    <center>
      {" "}
      <Usernavbar />
      <form onSubmit={submitForm}>
        <input
          placeholder="Enter user Name"
          name="name"
          value={profile.name}
          onChange={oninputChange}
        />

        <input
          placeholder="Enter user E-mail"
          name="email"
          value={profile.email}
          onChange={oninputChange}
        />

        <input
          placeholder="Enter user Password"
          name="password"
          value={profile.password}
          onChange={oninputChange}
        />

        <input
          placeholder="Enter Location"
          name="location"
          value={profile.address}
          onChange={oninputChange}
        />

        <input
          placeholder="Enter website"
          name="website"
          value={profile.phone}
          onChange={oninputChange}
        />

        <input
          placeholder="Enter website"
          name="website"
          value={profile.about}
          onChange={oninputChange}
        />

        <select
          name="experties"
          id="experties"
          onChange={oninputChange}
          value={profile.experties}
        >
          <option value="Plumber">Plumber</option>
          <option value="Kitchen Appliances">Kitchen Appliances</option>
          <option value="Electronic Appliances">Electronic Appliances</option>
          <option value="Bike Mechanic">Bike Mechanic</option>
          <option value="Car Mechanic">Car Mechanic</option>
        </select>

        <input
          type="textarea"
          rows="400"
          cols="400"
          placeholder="Enter website"
          name="website"
          value={profile.experience}
          onChange={oninputChange}
        />

        <button type="submit">{id ? "Update Profile" : "Add Profile"}</button>
      </form>
    </center>
  );
};

export default Editprofile;
