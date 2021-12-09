import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Admindashboard from "./Admindashboard";
import Userdashboard from "./Userdashboard";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const [status, setStatus] = useState();
  const [image, setImage] = useState("");

  const history = useHistory();

  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
      setStatus(data.status);
      setImage(data.image);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
    fetchUserName();
  }, [user, loading, history]);

  return (
    <>
      {(() => {
        if (status === "Viewer") {
          return history.push("/");
        } else if (status === "Resource") {
          return (
            <>
              <Userdashboard
                name={name}
                status={status}
                image={image}
                user={user}
              />
            </>
          );
        } else if (status === "Admin") {
          return (
            <>
              <Admindashboard
                name={name}
                status={status}
                image={image}
                user={user}
              />
            </>
          );
        } else {
          return (
            <>
              <div className="dashboard">
                <div className="dashboard__container">
                  <div>Welcome to Dashboard.</div>
                </div>
              </div>
            </>
          );
        }
      })()}
    </>
  );
};

export default Dashboard;
