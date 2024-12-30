import { Injectable } from '@angular/core';
import { Marcador } from "../interfaces/marcador.interface";

@Injectable()
export class MapasService {

  marcadores: any[]=[];

  constructor() {

    let nuevoMarcador:Marcador = {
      lat: 43.1395338,
      lng: -2.9021055,
      titulo: "CIFP Zornotza LHII",
      draggable: true
    }

    this.marcadores.push( nuevoMarcador );

  }

  insertarMarcador( marcador: Marcador){
    this.marcadores.push(marcador);
    this.guardarMarcadores();
  }

  borrarMarcador(idx:number){
    this.marcadores.splice(idx,1);
    this.guardarMarcadores();
  }

  guardarMarcadores(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  cargarMarcadores(){

    if( localStorage.getItem('marcadores')){
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }else{
      this.marcadores=[];
    }
  }

}
