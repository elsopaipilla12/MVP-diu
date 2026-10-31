import React, { useState } from 'react'
import { OPCIONES_RESERVA } from '../data/talleres'



export const ReservasPage = () => {
  const [seleccionada, setSeleccionada] = useState(null)

  return (
    <div className='section-page'>
      <div className='section-page__header'>
        <h1><span className='yellow-bar'>|</span> Opciones de Reservas</h1>
        <p>Selecciona un recinto deportivo para realizar tu reserva de bloque horario.</p>
      </div>

      {seleccionada && (
        <div className='alert-success'>
          Has seleccionado reservar: <strong>{seleccionada.nombre}</strong> ({seleccionada.horario}).
        </div>
      )}

      <div className='options-grid'>
        {OPCIONES_RESERVA.map((item) => (
          <div key={item.id} className='option-box'>
            <h3>{item.nombre}</h3>
            <p><strong>Bloque:</strong> {item.horario}</p>
            <p><strong>Cupos disponibles:</strong> {item.cupos}</p>
            <button 
              className='btn-primary'
              onClick={() => setSeleccionada(item)}
            >
              Seleccionar Reserva
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReservasPage