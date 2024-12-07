import { createContext, useEffect } from "react";
import React, { useState } from "react";
import { myAxios } from "./MyAxios";
//import Termek from "../components/Termek.js";
//import axios from "axios"

export const ApiContext = createContext("");

export const WebProvider = ({ children }) => {
  const [termekLista, setTermekLista] = useState([]);

  function getAdat(vegpont) {
    myAxios
      .get(vegpont)
      .then(function (response) {
        console.log(response.data);

        setTermekLista(response.data);
      })

      .catch(function (error) {
        console.log(error);
      })

      .finally(function () {});
  }
  useEffect(() => {
    getAdat();
  }, []); 

  return (
    <ApiContext.Provider value={{ termekLista }}>
      {children}
    </ApiContext.Provider>
  );
};

