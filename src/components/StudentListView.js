import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ListView.css";

export default function ListView() {
  const [canSuspend, setCanSuspend] = useState(true);

  const users = [
    {
      "_id": "64748db03d0678cdde0173fc",
      "username": "tomin12",
      "name": "Tomin Joy"
    },
    {
      "_id": "6475dab087058119aad7cb92",
      "username": "akash",
      "name": "Akash Vijay"
    },
    {
      "_id": "6475dabd87058119aad7cb93",
      "username": "akash2",
      "name": "Akash Vijay3"
    },
    {
      "_id": "647cd2eb25bca0a7a45c84db",
      "username": "tomin12p",
      "name": "Tomin Joy"
    },
    {
      "_id": "647e0f8e5d9bd88e05711659",
      "username": "kns3",
      "name": "string s"
    },
    {
      "_id": "647e1ce400499ae18d051eb0",
      "username": "kns",
      "name": "string s"
    },
    {
      "_id": "64806c86867b21145ade9efc",
      "username": "admi2",
      "name": "ksks"
    },
    {
      "_id": "64808390dae9c6a75910710f",
      "username": "1",
      "name": "tomin"
    },
    {
      "_id": "648086dfdae9c6a759107110",
      "username": "2",
      "name": "Tomin Joy"
    },
    {
      "_id": "6481aac35ad63591426ac7aa",
      "username": "mathews1",
      "name": "Mathews P Mathews"
    }
  ];

  const handleSuspend = () => {
    // Add the logic to handle suspend action here
  };

  return (
    <>
      <div className="d-flex flex-row parent">
        <div className="d-flex flex-col font-weight-bold">Username</div>
        <div className="d-flex flex-col font-weight-bold">Name</div>
        <div className="d-flex flex-col font-weight-bold">Status</div>
        {/* <button type="button" className="btn btn-outline-danger">Danger</button> */}
      </div>

      {users.username.map((username, index) => (
        <div
          className={`d-flex flex-row listBody ${
            !canSuspend ? "red-bg" : ""
          }`}
          key={index}
        >
          <div className="d-flex flex-col text-center">{username}</div>
          <div className="d-flex flex-col text-center">{users.name[index]}</div>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={handleSuspend}
            disabled={!canSuspend}
          >
            Suspend
          </button>
        </div>
      ))}
    </>
  );
}
