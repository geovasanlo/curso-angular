import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeneradoCliComponent } from './prueba-componentes/generado-cli/generado-cli.component';
import { GeneradoManoComponent } from './prueba-componentes/generado-mano/generado-mano.component';
import { MiDirectivaDirective } from './directivas/mi-directiva.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HijoComponent } from './clase-5/hijo/hijo.component';
import { FormularioComponent } from './clase-6/componentes/formulario/formulario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modulos/material/material.module';
import { MaterialEjemplosComponent } from './clase7/material-ejemplos/material-ejemplos.component';
import { EjemploModalComponent } from './clase7/ejemplo-modal/ejemplo-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneradoCliComponent,
    GeneradoManoComponent,
    MiDirectivaDirective,
    HijoComponent,
    FormularioComponent,
    MaterialEjemplosComponent,
    EjemploModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
