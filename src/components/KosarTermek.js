import React, { useContext } from "react";
import Button from "./Button";
import { KosarContext } from "../context/KosarContext";

export default function KosarTermek({ termek }) {
  const { csokkentes, noveles, torles } = useContext(KosarContext);
  return (
    <tr>
      <td>{termek.author}</td>
      <td>{termek.title}</td>
      <td>{termek.pieces} db</td>
      <td>{termek.prices} Ft</td>
      <td>
        <Button onClick={() => csokkentes(termek)}>-</Button>
        {/* Csökkentés gomb */}
        <span>{termek.mennyiseg}</span> {/* Termék mennyisége */}
        <Button onClick={() => noveles(termek)}>+</Button>
        {/* Növelés gomb */}
      </td>
      <Button onClick={() => torles(termek)}>Törlés</Button>
      {/* Törlés gomb */}
    </tr>
  );
}
