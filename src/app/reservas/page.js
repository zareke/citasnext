'use client'

import { useState, useCallback } from 'react';
import Image from "next/image";
import Titulo from "../components/Titulo.js";
import Formulario from "../components/Formulario.js";
import ListaCitas from "../components/ListaCitas.js";

// Hook personalizado para manejar confirmaciones
function useConfirm() {
  return useCallback((message) => {
    if (typeof window !== 'undefined') {
      return window.confirm(message);
    }
    return false;
  }, []);
}

export default function Reservas() {
  const [citas, setCitas] = useState([]);
  const confirm = useConfirm();

  const agregarCita = (cita) => {
    if (confirm('¿Desea agregar esta cita?')) {
      setCitas(prevCitas => [...prevCitas, cita]);
    }
  };

  const eliminarCita = (id) => {
    if (confirm('¿Desea eliminar esta cita?')) {
      setCitas(prevCitas => prevCitas.filter((_, index) => index !== id));
    }
  };

  return (
    <div className="container">
      <Titulo />
      <div className="content">
        <div className="formulario">
          <Formulario agregarCita={agregarCita} />
        </div>
        <div className="listota">
          <ListaCitas citas={citas} eliminarCita={eliminarCita} />
        </div>
      </div>
    </div>
  );
}