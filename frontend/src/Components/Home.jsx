import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { logOut } from "../Redux/adminlogin/action";
import { Details } from "./Details";

export const Home = () => {
  //const { isAuthenticated } = useSelector((state) => state.login);

  //const dispatch = useDispatch();
  const [data, setData] = useState();

  const getData = () => {
    fetch("http://localhost:8080/teacher")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log("Error"));
  };
  useEffect(() => {
    getData();
  }, []);

  // if (!isAuthenticated) {
  //   return <Navigate to="//admin-login"></Navigate>;
  // }

  // const handleLogout = () => {
  //   dispatch(logOut);
  // };

  return (
    <>
      <div></div>
      {data.map((e) => (
        <Details
          key={e.id}
          name={e.name}
          age={e.age}
          gender={e.gender}
          clss={e.class_id.length}
        ></Details>
      ))}
    </>
  );
};
