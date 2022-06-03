import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { MarqueComponent } from './components/marque/marque.component';
import { MotoPharesComponent } from './components/moto-phares/moto-phares.component';
import { TypeComponent } from './components/type/type.component';

const routes: Routes = [
  {path: "",component: MotoPharesComponent},
  {path: "type", component: TypeComponent},
  {path: "marque", component: MarqueComponent},
  {path: ':id', component: DetailComponent},
  {path: 'type/:type', component: TypeComponent},
  {path: 'marque/:marque', component: MarqueComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
