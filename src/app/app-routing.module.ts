import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ItemComponent } from './components/item/item.component';
import { OrdenComponent } from './components/orden/orden.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';

const routes: Routes = [
  { path: 'main', component:MainComponent, 
  children: [
    { path: 'cliente', component: ClientesComponent},
    { path: 'item', component: ItemComponent},
    { path: 'solicitud', component: SolicitudComponent},
    { path: 'orden', component: OrdenComponent}]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
