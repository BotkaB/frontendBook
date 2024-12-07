import React, { useContext } from "react";
import Termek from "./Termek";
import { ApiContext } from "../context/ApiContext";

function Termekek() {
  const { termekLista } = useContext(ApiContext);

  return (
    <>
      {termekLista.map((elem, i) => {
        return <Termek kartya={elem} key={i} index={i} />;
      })}
    </>
  );
}

export default Termekek;
