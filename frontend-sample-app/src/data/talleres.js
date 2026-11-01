
import imgkarate from '../assets/karate.jpg'; //cambien la imagen por una del deporte
import imgajedrez from '../assets/ajedrez.jpg'; 
import imgbasquet from '../assets/basquet.jpg';
import imgfutsal from '../assets/futsal.jpg';
import imggimnasia from '../assets/gimnasia.jpg';
import imgpingpong from '../assets/pingpong.jpg';


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
    imagen: imgajedrez
  },
  { 
    id: 2, 
    nombre: 'Básquetbol', 
    campus: 'Campus Casa Central',
    profesor: 'Por definir',
    recinto: 'Gimnasio Principal',
    horario: 'Lunes y Miércoles: 15:45 - 17:15',
    imagen: imgbasquet
  },
  { 
    id: 3, 
    nombre: 'Futsal', 
    campus: 'Campus Casa Central',
    profesor: 'Pablo Fernández Troncoso',
    recinto: 'Cancha Exterior',
    horario: 'Lunes: 17:30 - 18:40  \n Jueves 17:30 - 18:40',
    imagen: imgfutsal
  },
  { 
    id: 4, 
    nombre: 'Gimnasia Artística', 
    campus: 'Campus Casa Central',
    profesor: ' Bruce Gallardo',
    recinto: 'Sala de Gimnasia',
    horario: 'Viernes: 11:00 - 12:30',
    imagen: imggimnasia
    
  },
  { 
    id: 5, 
    nombre: 'Básquetbol 3x3', 
    campus: ' San Joaquín / Vitacura',
    profesor: ' Felipe Reyes Sangermani',
    recinto: 'Sala de Gimnasia',
    horario: 'Lunes: 13:40-14:40, Vitacura \n Martes: 12:30-13:40 San Joaquín',
    imagen: imgbasquet
    
  },
  { 
    id: 6, 
    nombre: 'Tenis de Mesa', 
    campus: 'San Joaquín',
    profesor: 'Isabel Castillo Barrera',
    recinto: 'Gimnasio',
    horario: 'Jueves: 17:30 - 18:40',
    imagen: imgpingpong
    
  },
  { 
    id: 7, 
    nombre: 'Karate', 
    campus: 'Campus San Joaquín / Vitacura',
    profesor: ' Patricio Cifra Abarca',
    recinto: 'Gimnasio',
    horario: 'Jueves: 13:40 - 14:40 San Joaquín\n Martes: 12:30 - 13:40 Vitacura',
    imagen: imgkarate
    
  },
  { 
    id: 8, 
    nombre: 'Futsal', 
    campus: 'Campus San Joaquín',
    profesor: '  Jose Silva Albornoz',
    recinto: 'Gimnasio',
    horario: 'Miércoles: 17:30 - 18:40',
    imagen: imgfutsal
    
  }
];