import React, { useState, createContext } from "react";
import { db } from "./firebase";
import { useFirestore } from "react-redux-firebase";

export const UserContext = createContext();
export const UserProvider = (props) => {
  const firestore = useFirestore();
  const [data, setData] = useState([]);

  const docRef = db.collection("users").where("isVerified", "==", "true");
  const result = docRef.get();
  if (result.exists) {
    setData(result.data());
  } else {
    console.log("NO such User");
  }

  return (
    <>
      <UserContext.Provider value={[data, setData]}>
        {props.children}
      </UserContext.Provider>
    </>
  );
};
