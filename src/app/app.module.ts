import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
  import { AppRoutingModule, routingComponents } from './app-routing.module';
  import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{ MaterialModule } from './material';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
//componentes
import{MainNavComponent} from'./main-nav/main-nav.component';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { InicioComponent } from './inicio/inicio.component';
import { AreasComponent } from './areas/areas.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ObjetivosComponent,
    routingComponents,
    DocumentosComponent,
    InicioComponent,
    AreasComponent,
    CategoriasComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    Ng2CarouselamosModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatFormFieldModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
