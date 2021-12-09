import React, { useState, useEffect } from "react";
import Usernavbar from "../Navbar/Usernavbar";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { app } from "../../firebase";
import { useFirestore } from "react-redux-firebase";

const Addprofile = () => {
  const userdata = useSelector((state) => state.firebase.profile);

  const firestore = useFirestore();
  const [DocsUrL, setDocsUrl] = useState();
  const history = useHistory();

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setDocsUrl(await fileRef.getDownloadURL());
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const experience = e.target.experience.value;
    const about = e.target.about.value;
    if (!phone || !address || !experience || !about || !DocsUrL) {
      return;
    }
    try {
      await firestore
        .collection("users")
        .doc(userdata.uid)

        .update(
          {
            phone: phone,
            address: address,

            experience: experience,
            about: about,
            document: DocsUrL,
            created_at: new Date(),
          },
          { merge: true }
        )
        .then(() => alert("Updated"))

        .catch((err) => console.log(err.message()));
    } catch (error) {
      console.log(error);
    }

    history.push("/myprofile");
  };

  return (
    <div>
      <Usernavbar />
      {!userdata.phone ? (
        <>
          <h2>Add Profile</h2>
          <form onSubmit={onSubmit}>
            <input type="text" name="address" placeholder="address" required />
            <input type="text" name="phone" placeholder="phone" required />
            <input type="text" name="experience" placeholder="experience" />
            <input
              type="textarea"
              name="about"
              placeholder="about"
              rows="40"
              cols="50"
            />
            <h2>Certificate</h2>
            <input
              type="file"
              name="document"
              placeholder="document"
              required
              onChange={onFileChange}
            />
            <button>Add Profile</button>
          </form>
        </>
      ) : (
        <>
          <h1>
            <center>Profile Already Updated</center>
          </h1>
        </>
      )}
    </div>
  );
};

export default Addprofile;
