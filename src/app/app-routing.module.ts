import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FunilComponent } from './funil/funil.component';
import { ProspeccoesComponent } from './prospeccoes/prospeccoes.component';
import { LeadsGanhasComponent } from './leads-ganhas/leads-ganhas.component';
import { LeadsPerdidasComponent } from './leads-perdidas/leads-perdidas.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, children: [
      { path: 'funil', component: FunilComponent },
      { path: 'prospeccoes', component: ProspeccoesComponent },
      { path: 'leads-ganhas', component: LeadsGanhasComponent },
      { path: 'leads-perdidas', component: LeadsPerdidasComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
