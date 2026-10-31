import React from 'react'
import { Link } from 'react-router-dom'

// 1. IMPORTA TU IMAGEN DIRECTAMENTE AQUÍ
import imgReservas from '../assets/msc.jpg'
// Si agregas otra imagen para talleres, impórtala así:
// import imgTalleres from '../assets/otra-imagen.jpg'

export const HomePage = () => {
  return (
    <div className='home'>
      {/* Banner estilo DEFIDER */}
      <section className='home__hero'>
        <div className='home__hero-overlay'>
          <h1 className='home__hero-title'>
            <span className='yellow-bar'>|</span> Portal de Deportes y Recreación
          </h1>
        </div>
      </section>

      <p className='home__description'>
        Bienvenido a la plataforma del Departamento de Educación Física, Deportes y Recreación (DEFIDER). 
        Selecciona una de las opciones a continuación para gestionar tus horarios de gimnasio o inscribirte en actividades deportivas.
      </p>

      {/* Tarjetas centrales */}
      <section className='home__cards-container'>
        
        {/* TARJETA RESERVAS: Aplicamos la imagen importada con style */}
        <Link 
          to='/reservas' 
          className='feature-card'
          style={{ backgroundImage: `url(${imgReservas})` }}
        >
          <div className='feature-card__overlay'>
            <div className='feature-card__content'>
              <h2 className='feature-card__title'>
                <span className='yellow-bar'>|</span> Reservas
              </h2>
              <p className='feature-card__subtitle'>Espacios Deportivos y Gimnasio</p>
            </div>
          </div>
        </Link>

        {/* TARJETA TALLERES: Aplica el mismo método cuando tengas su imagen */}
        <Link 
          to='/talleres' 
          className='feature-card'
          /* Descomenta la línea de abajo cuando tengas imgTalleres */
          /* style={{ backgroundImage: `url(${imgTalleres})` }} */
        >
          <div className='feature-card__overlay'>
            <div className='feature-card__content'>
              <h2 className='feature-card__title'>
                <span className='yellow-bar'>|</span> Talleres
              </h2>
              <p className='feature-card__subtitle'>Deporte Individual y Colectivo</p>
            </div>
          </div>
        </Link>
        
      </section>
    </div>
  )
}

export default HomePage