import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../modelos/personajes';
import { MockapiService } from '../../servicios/mockapi.service';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {

  public personajes: Personaje[];

  constructor(
    private mockapiService: MockapiService
  ) { }

  ngOnInit(): void {
    
  }

  cargarPersonaje(id: string) {
    this.mockapiService.getPersonaje(id).subscribe(personaje => {
      this.personajes = [personaje];
    });
  }

  cargarPersonajes() {
    this.mockapiService.getPersonajes().subscribe(personajes => {
      this.personajes = personajes;
    });
  }

  guardarPersonaje() {
    this.mockapiService.crearPersonaje(
      {id: '100', nombre: 'Harry Potter', pelicula: 'Harry Potter', createdAt: new Date()}
    ).subscribe(resp => {
      alert('Se creo el personaje ' + resp.nombre);
      this.cargarPersonajes();
    });
  }

  editarPersonaje() {
    this.mockapiService.editarPersonaje('11', {
      nombre: 'Darth Vader', pelicula: 'Star Wars', createdAt: new Date()
    }).subscribe(resp => {
      alert('Se edito el personaje ' + resp.nombre);
      this.cargarPersonajes();
    });
  }

  eliminarPersonaje() {
    this.mockapiService.eliminarPersonaje('12').subscribe(respuesta => {
      console.log(respuesta);
      this.cargarPersonajes();
    });
  }

}
