import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FunilComponent } from './funil/funil.component';
import { ProspeccoesComponent } from './prospeccoes/prospeccoes.component';
import { LeadsGanhasComponent } from './leads-ganhas/leads-ganhas.component';
import { LeadsPerdidasComponent } from './leads-perdidas/leads-perdidas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    FunilComponent,
    ProspeccoesComponent,
    LeadsGanhasComponent,
    LeadsPerdidasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
