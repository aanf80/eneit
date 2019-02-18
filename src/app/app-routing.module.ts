import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';
import {ObjetivosComponent} from './objetivos/objetivos.component';
import {CategoriasComponent} from './categorias/categorias.component';
import { AreasComponent} from './areas/areas.component';
import { DocumentosComponent } from './documentos/documentos.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent },
 {path: 'objetivos', component: ObjetivosComponent },
 {path: 'categorias', component: CategoriasComponent },
 {path: 'areas', component: AreasComponent },
 {path: 'documentos', component: DocumentosComponent },
 { path: '',   redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [InicioComponent, ObjetivosComponent, CategoriasComponent, AreasComponent,DocumentosComponent];