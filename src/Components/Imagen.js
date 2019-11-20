import React, { Component } from 'react';
import Carousel, { Modal, ModalGateway} from 'react-images';
import { productos } from '../Productos/productos.json'; //Datos de un back por el momento
import Formulario from './Formulario.js'

import agua from '../Imagenes/agua.png';
import panela from '../Imagenes/panela.png';
import atun from '../Imagenes/atun.png';
import mantequilla from '../Imagenes/mantequilla.png';
import vino from '../Imagenes/vino-tinto.png';
import  carne from '../Imagenes/carne.png';

const images = [
  {src: agua},
  {src: panela},
  {src: atun},
  {src: mantequilla},
  {src: carne},
  {src: vino}
];

class Imagen extends Component {
  render() {
  return <Carousel views={images}/>;
  }
}
export default Imagen;
