import React, { useContext } from "react";
import KosarTermek from "./KosarTermek";
import { KosarContext } from "../context/KosarContext";

// 'Kosar' komponens definiálása
export default function Kosar() {
  const { kosar, noveles, csokkentes, torles } = useContext(KosarContext);

  return (
    <div className="kosar-container">
      <table className="table">
        <thead>
          <tr>
            <th>Szerző</th>
            <th>Cím</th>
            <th>Mennyiség</th>
            <th>Ár</th>
            <th>Művelet</th>
          </tr>
        </thead>
        <tbody>
          {kosar.map((termek, index) => (
            <KosarTermek
              key={index}
              termek={termek}
              noveles={noveles}
              csokkentes={csokkentes}
              torles={torles}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
