import { DataTable } from './components/DataTable';
import type { Estudiante } from './types/universidad.types';

const misAlumnos: Estudiante[] = [
  { 
    id: 1, 
    nombre: "Marcos", 
    estado: { tipo: "ACTIVA", asignaturas: ["TS", "React"] } 
  }
];

export default function App() {
  return (
    <DataTable<Estudiante> 
      titulo="Listado de Alumnos"
      datos={misAlumnos} 
      columnas={["id", "nombre"]} 
    />
  );
}