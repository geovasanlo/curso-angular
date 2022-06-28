import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Fruta, HijoComponent } from './clase-5/hijo/hijo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(HijoComponent, {static: false}) componenteHijo: HijoComponent;

  constructor() {
  }

  title = 'curso-angular';

  ngAfterViewInit(): void {
    console.log(this.componenteHijo);
  }

  funcionClick(fruta: Fruta) {
    alert(fruta);
  }

  cambiarTitulo() {
    this.componenteHijo.titulo = 'Titulo cambiado';
  }
}
