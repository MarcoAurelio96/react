import type { Estudiante } from "../types/universidad.types";

export function generarReporte(estudiante: Estudiante): string {
  const { estado } = estudiante;

  switch (estado.tipo) {
    case "ACTIVA":
      return `Estudiante activo en ${estado.asignaturas.length} asignaturas.`;
    case "SUSPENDIDA":
      return `Matrícula suspendida por: ${estado.motivo}.`;
    case "FINALIZADA":
      return `Carrera finalizada con media de ${estado.notaMedia}.`;
    default: {
      const _check: never = estado;
      throw new Error(`Estado no manejado: ${_check}`);
    }
  }
}