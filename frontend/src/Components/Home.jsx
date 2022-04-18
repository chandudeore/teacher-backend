import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";

export const Home = () => {
  const { isAuthenticated } = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const [data1, setData] = useState([]);
  const [sorting, setSorting] = useState("");
  const [page, setPage] = useState(1);

  const getData = () => {
    fetch(`http://localhost:8080/teacher?page=${page}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log("Error"));
  };
  useEffect(() => {
    getData();
  }, [page]);
  //console.log(page);
  if (!isAuthenticated) {
    return <Navigate to="/admin-login"></Navigate>;
  }

  // const handleLogout = () => {
  //   dispatch(logOut);
  // };

  return (
    <>
      <div>
        <button onClick={() => setPage(1)}>1</button>
        <button onClick={() => setPage(2)}>2</button>
        <button onClick={() => setPage(3)}>3</button>
        <button onClick={() => setPage(4)}>4</button>
        <button onClick={() => setPage(5)}>5</button>
      </div>
      <div>
        <table>
          <thead>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>No-Of-Classes</th>
          </thead>
          <tbody>
            {data1.map((e) => {
              return (
                <tr key={e.id}>
                  <td>{e.name}</td>
                  <td>{e.age}</td>
                  <td>{e.gender}</td>
                  <td>{e.class_id.length}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <button onClick={() => setSorting("asc")}>lot to High</button>
        <button onClick={() => setSorting("dsc")}>High to low</button>
      </div>
    </>
  );
};
