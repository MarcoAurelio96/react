import React, { useState } from 'react';

interface DataTableProps<T> {
  datos: T[];
  columnas: (keyof T)[];
  titulo: string;
}

export function DataTable<T extends { id: string | number}>({ datos, columnas, titulo }: DataTableProps<T>) {
  
  const [editando, setEditando] = useState<Partial<T> | null>(null);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>{titulo}</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            {columnas.map((col) => (
              <th key={String(col)} style={{ border: '1px solid #ddd', padding: '8px' }}>
                {String(col).toUpperCase()}
              </th>
            ))}
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item, index) => (
            <tr key={index}>
              {columnas.map((col) => (
                <td key={String(col)} style={{ border: '1px solid #ddd', padding: '8px' }}>
                  {/* Renderizado seguro: convertimos a string lo que venga */}
                  {String(item[col])}
                </td>
              ))}
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <button onClick={() => setEditando(item)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mini Modal de Edición usando el estado Partial */}
      {editando && (
        <div style={{ marginTop: '20px', background: '#fff9c4', padding: '10px' }}>
          <h3>Modo Edición (Partial Type activo)</h3>
          <p>Editando registro con ID: {String(editando.id || 'Nuevo')}</p>
          <button onClick={() => setEditando(null)}>Cancelar</button>
        </div>
      )}
    </div>
  );
}