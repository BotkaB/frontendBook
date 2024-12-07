import React, {useContext} from "react";
import Button from "./Button";
import { KosarContext } from "../context/KosarContext";


export default function Termek({ kartya }) {
  const {  kosarbaRak } = useContext(KosarContext);
  return (
    <div className="card col-lg-4 col-md-6 col-sm-12">
      <div className="card-body">
        <h3>{kartya.author}</h3>
        <div> {kartya.title} </div>
        <div>Készleten: {kartya.pieces} db.</div>
        <div className= "card-footer"> ÁR: {kartya.prices} Ft.
        <Button onClick={() => kosarbaRak(kartya)}>kosárba tesz</Button>
        </div>
      </div>
    </div>
  );
}