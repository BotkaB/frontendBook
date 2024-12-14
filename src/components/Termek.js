import React, {useContext} from "react";
import Button from "./Button";
import { KosarContext } from "../context/KosarContext";


const styles={
  card: {
   flex: '1 1 auto', /* Rugalmasan igazodik a rendelkezésre álló helyhez */
    display: 'grid', /* Flexbox elrendezés alkalmazása */
    flexDirection: 'column', /* A belső elemek függőleges elrendezése */
  },
  cardBody:{
backgroundColor:'light-grey',
  }
};


export default function Termek({ kartya }) {
  const {  kosarbaRak } = useContext(KosarContext);
  return (
    <div className="card col-lg-4 col-md-6 col-sm-12" style={styles.card}>
      <div className="card-body" style={styles.cardBody}>
        <h3>{kartya.author}</h3>
        <h2> {kartya.title} </h2>
        <p>Készleten: {kartya.pieces} db.</p>
        <div className= "card-footer"> ÁR: {kartya.prices} Ft.
        <Button onClick={() => kosarbaRak(kartya)}>kosárba tesz</Button>
        </div>
      </div>
    </div>
  );



}

