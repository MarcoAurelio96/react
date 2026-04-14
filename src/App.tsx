import { DataTable } from './components/DataTable';
import type { Estudiante } from './types/universidad.types';
import { calcularDiferenciaDias } from './utils/fechas';

const misAlumnos: Estudiante[] = [
  { id: 1, nombre: "Marcos", estado: { tipo: "ACTIVA", asignaturas: ["TS", "React"] } }
];

const fechaIngreso = new Date(2024, 0, 1); // 1 de Enero 2024
const hoy = new Date();
const diasTranscurridos = calcularDiferenciaDias(fechaIngreso, hoy);

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Panel de Control Universitario</h1>
      <p style={{ color: 'gray' }}>
        Días desde el inicio del ciclo lectivo: <strong>{diasTranscurridos} días</strong>
      </p>
      
      <DataTable<Estudiante> 
        titulo="Listado de Alumnos"
        datos={misAlumnos} 
        columnas={["id", "nombre"]} 
      />
    </div>
  );
}