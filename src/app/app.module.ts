import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeneradoCliComponent } from './prueba-componentes/generado-cli/generado-cli.component';
import { GeneradoManoComponent } from './prueba-componentes/generado-mano/generado-mano.component';
import { MiDirectivaDirective } from './directivas/mi-directiva.directive';
import { FormsModule } from '@angular/forms';
import { HijoComponent } from './clase-5/hijo/hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneradoCliComponent,
    GeneradoManoComponent,
    MiDirectivaDirective,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
