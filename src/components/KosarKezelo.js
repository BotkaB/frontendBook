import React, { useContext } from "react";
import Kosar from "./Kosar";
import Termekek from "./Termekek";
import { KosarContext } from "../context/KosarContext";



const styles={
 
  
kosarOldalsav: {
  width: '500px',
  /* Fix szélesség beállítása az oldalsávnak */
  padding: '20px',
  /* Belső margó hozzáadása */
  backgroundColor: '#f8f9fa',
  /* Háttérszín beállítása */
  borderLeft: '1px solid #ddd',
  /* Bal oldali szegély hozzáadása */
  position: 'sticky',
  /* Fixálás az oldal jobb szélén */
  top: '0',
  /* A tetejéhez igazítás */
  maxHeight: 'fit-content',

  overflowY: 'auto'
  /* Függőleges görgetés engedélyezése */
}
  };
  
// 'KosarKezelo' komponens definiálása
export default function KosarKezelo() {
  const { termekLista, kosar, noveles, csokkentes, torles, kosarbaRak } =
    useContext(KosarContext); // KosarContext használata a szükséges értékek eléréséhez
 
  return (
    <div className="App-container">
      <div className="termekek" >
        {/* Termékek komponens meghívása és a contextből származó terméklista átadása */}
        <Termekek termekLista={termekLista} katt={kosarbaRak} />
      </div>
      <aside className="kosar-oldalsav" styles={styles.kosarOldalsav}>
        {/* Kosár komponens meghívása és a contextből származó értékek és függvények átadása */}
        <Kosar
          kosar={kosar}
          noveles={noveles}
          csokkentes={csokkentes}
          torles={torles}
        />
      </aside>
    </div>
  );
}

/*
Magyarázat:
- A `KosarKezelo` komponens a `KosarContext` használatával éri el a szükséges adatokat és függvényeket (termekLista, kosar, noveles, csokkentes, torles, kosarbaRak).
- A `Termekek` komponens a contextből származó `termekLista`-t és a `kosarbaRak` függvényt kapja propként.
- A `Kosar` komponens a contextből származó `kosar`, `noveles`, `csokkentes`, és `torles` értékeket és függvényeket kapja propként.
*/
