export interface MatriculaActiva {
    tipo : "ACTIVA";
    asignaturas : string[];
}

export interface MatriculaSuspendida {
    tipo : "SUSPENDIDA";
    motivo : string;
}

export interface MatriculaFinalizada {
    tipo : "FINALIZADA";
    notaMedia : number;
}

export type EstadoMatricula = MatriculaActiva | MatriculaSuspendida | MatriculaFinalizada;

export interface Estudiante {
  readonly id: number;
  nombre: string;
  estado: EstadoMatricula;
}

export interface Asignatura {
  readonly id: string;
  nombre: string;
  creditos: number;
}

export interface RespuestaAPI<T> {
  codigoEstado: number;
  exito: boolean;
  datos: T;
  mensaje?: string;
}