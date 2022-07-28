import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Personaje } from '../modelos/personajes';

@Injectable({
  providedIn: 'root'
})
export class MockapiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPersonajes(): Observable<Personaje[]> {
    return this.httpClient.get(
      environment.baseURL + '/personajes'
    ).pipe(map(response => response as Personaje[]));
  }

  getPersonaje(id: string): Observable<Personaje> {
    return this.httpClient.get<Personaje>(
      environment.baseURL + '/personajes/' + id
    );
  }

  crearPersonaje(personaje: Personaje): Observable<any> {
    return this.httpClient.post(
      environment.baseURL + '/personajes',
      personaje
    );
  }

  editarPersonaje(id: string, personaje: Personaje): Observable<any> {
    return this.httpClient.put(
      environment.baseURL + '/personajes/' + id,
      personaje
    );
  }

  eliminarPersonaje(id: string): Observable<any> {
    return this.httpClient.delete(
      environment.baseURL + '/personajes/' + id
    );
  }

}
