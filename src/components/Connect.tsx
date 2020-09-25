import React, { useState, useCallback } from "react";
import History from "./History";

const Connect = () => {
  const [ip, setIp] = useState("");
  const [port, setPort] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const [historyOpen, setHistoryOpen] = useState(false);

  const handleHistoryOpen = useCallback(() => {
    setHistoryOpen(!historyOpen);
  }, [historyOpen]);

  return (
    <>
      <div className="ConnectInfo">
        <input
          type="text"
          placeholder="HOST"
          onChange={(e) => setIp(e.target.value)}
          value={ip}
        ></input>
        <input
          type="text"
          placeholder="PORT"
          onChange={(e) => setPort(e.target.value)}
          value={port}
        ></input>
        <input
          type="text"
          placeholder="ID"
          onChange={(e) => setId(e.target.value)}
          value={id}
        ></input>
        <input
          type="password"
          placeholder="PASSWORD"
          onChange={(e) => setPw(e.target.value)}
          value={pw}
        ></input>
        <button>Connect</button>
        <button type="button" onClick={handleHistoryOpen}>
          {historyOpen ? "O" : "C"}
        </button>
      </div>
      <History show={historyOpen}></History>
    </>
  );
};

export default Connect;
