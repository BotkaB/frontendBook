import React, { useContext } from "react";
import Termek from "./Termek";
import { ApiContext } from "../context/ApiContext";


  
const styles={
  termekek: {
    flex: '5 auto',
    /* A tartalom rugalmasan kitölti a rendelkezésre álló helyet */
    padding: '20px'
    /* Belső margó hozzáadása */
  }
  };

export default function Termekek() {
  const { termekLista } = useContext(ApiContext);

  return (
    <div style={styles.termekek}>
      {termekLista.map((elem, i) => {
        return <Termek kartya={elem} key={i} index={i} />;
      })}
    </div>
  );


  
}

