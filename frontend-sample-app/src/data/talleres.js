
import imgAjedrez from '../assets/msc.jpg'; //cambien la imagen por una del deporte
import imgBasquetbol from '../assets/msc.jpg'; 
import imgFutsal from '../assets/msc.jpg';
import imgGimnasia from '../assets/msc.jpg';

export const OPCIONES_RESERVA = [
  { id: 1, nombre: 'Sala de Pesas / Musculación', cupos: 15, horario: '08:30 - 10:00' },
  { id: 2, nombre: 'Cancha de Básquetbol / Vóleibol', cupos: 2, horario: '10:15 - 11:45' },
];

export const LISTA_TALLERES = [
  { 
    id: 1, 
    nombre: 'Ajedrez', 
    campus: 'Campus Casa Central',
    profesor: 'Raúl Molina Muñoz',
    recinto: 'Sala de Estar',
    horario: 'Jueves: 12:30 - 13:40',
    imagen: imgAjedrez
  },
  { 
    id: 2, 
    nombre: 'Básquetbol', 
    campus: 'Campus Casa Central',
    profesor: 'Por definir',
    recinto: 'Gimnasio Principal',
    horario: 'Lunes y Miércoles: 15:45 - 17:15',
    imagen: imgBasquetbol
  },
  { 
    id: 3, 
    nombre: 'Futsal', 
    campus: 'Por definir',
    profesor: 'Por definir',
    recinto: 'Cancha Exterior',
    horario: 'Por definir',
    imagen: imgFutsal
  },
  { 
    id: 4, 
    nombre: 'Gimnasia Artística', 
    campus: 'Por definir',
    profesor: 'Por definir',
    recinto: 'Sala de Gimnasia',
    horario: 'Viernes: 11:00 - 12:30',
    imagen: imgGimnasia
  }
];