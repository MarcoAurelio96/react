import { differenceInDays } from 'date-fns';

/**
 * Calcula la diferencia estricta en días entre dos fechas.
 * @param fechaInicio Objeto Date de inicio
 * @param fechaFin Objeto Date de fin
 * @returns número de días de diferencia
 */
export function calcularDiferenciaDias(fechaInicio: Date, fechaFin: Date): number {
  // differenceInDays devuelve el número de días completos entre dos fechas
  const diferencia = differenceInDays(fechaFin, fechaInicio);
  
  return diferencia;
}