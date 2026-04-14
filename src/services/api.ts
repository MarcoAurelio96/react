import type { RespuestaAPI } from "../types/universidad.types";

/**
 * Función genérica para obtener cualquier recurso.
 * <T> es el "comodín" que se convertirá en Estudiante, Asignatura, etc.
 */
export async function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
  console.log(`[API] Solicitando: ${endpoint}...`);

  return new Promise((resolve) => {
    setTimeout(() => {
      // Creamos un objeto que cumpla con la interfaz RespuestaAPI<T>
      const respuesta: RespuestaAPI<T> = {
        codigoEstado: 200,
        exito: true,
        // Usamos "as T" para decirle a TS: "confía en mí, esto simula el objeto T"
        datos: {} as T 
      };
      
      console.log(`[API] Respuesta recibida de ${endpoint}`);
      resolve(respuesta);
    }, 1000);
  });
}