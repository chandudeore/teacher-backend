import React from "react";
import "../style/detail.css";

export const Details = ({ name, age, gender, clss }) => {
  return (
    <>
      <div className="table1">
        <tr>
          <td>{name}</td>
          <td>{age}</td>
          <td>{gender}</td>
          <td>{clss}</td>
        </tr>
      </div>
    </>
  );
};
