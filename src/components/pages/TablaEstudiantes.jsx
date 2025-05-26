import React, { useState } from "react";
import { Table as Btable, Button, Form } from "react-bootstrap";
import { estudiantes as dataOriginal } from "./../../data/datos";

const TablaEstudiantes = () => {
  const [estudiantesFiltrados, setEstudiantesFiltrados] = useState(
    dataOriginal.datos
  );
  const [busqueda, setBusqueda] = useState("");

  const buscarEstudiantes = (lista, texto) =>
    lista.filter(
      (u) =>
        u.nombre.toLowerCase().includes(texto.toLowerCase()) ||
        u.materia.toLowerCase().includes(texto.toLowerCase())
    );

  const restaurarEstudiantes = () => {
    setBusqueda("");
    setEstudiantesFiltrados(dataOriginal.datos);
  };

  const handlerBuscar = () => {
    const resultado = buscarEstudiantes(dataOriginal.datos, busqueda);
    setEstudiantesFiltrados(resultado);
  };

  return (
    <div
      className="py-4 rounded shadow-sm"
      style={{ background: "#1c1c2e", color: "#eee" }}
    >
      {/* Encabezado con titulo y campo de busqueda */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 style={{ color: "#fff" }}>Listado de Estudiantes</h2>
        <div className="d-flex">
          <Form.Control
            type="text"
            placeholder="Busqueda por nombre o materia"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            style={{
              maxWidth: "300px",
              backgroundColor: "#e0e0e0",
              color: "#1c1c2e",
              border: "none",
              marginRight: "10px",
            }}
          />
          <Button onClick={handlerBuscar} variant="primary">
            BUSCAR
          </Button>
          <Button onClick={restaurarEstudiantes} variant="secondary" className="ms-2">
            RESTAURAR
          </Button>
        </div>
      </div>

      <Btable striped bordered hover>
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th>APELLIDO</th>
            <th>MATERIA</th>
            <th>NOTA FINAL</th>
          </tr>
        </thead>
        <tbody>
          {estudiantesFiltrados.map((estudiante) => (
            <tr key={estudiante.id}>
              <td>{estudiante.nombre}</td>
              <td>{estudiante.apellido}</td>
              <td>{estudiante.materia}</td>
              <td>{estudiante.nota_final}</td>
            </tr>
          ))}
        </tbody>
      </Btable>
    </div>
  );
};

export default TablaEstudiantes;
