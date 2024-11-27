import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Component, importProvidersFrom } from '@angular/core';
import { AparcanaCrearComponent } from './app/component/aparcana-crear/aparcana-crear.component';
import { AparcanaListarComponent } from './app/component/aparcana-listar/aparcana-listar.component';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


const routes: Routes = [
  {path: 'nuevo', component: AparcanaCrearComponent},
  {path: 'listar', component: AparcanaListarComponent},
  {path: '', redirectTo: '/nuevo', pathMatch: 'full'}
]

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(RouterModule, HttpClientModule, MatToolbarModule, BrowserAnimationsModule), provideAnimationsAsync()
  ]
})
  .catch((err) => console.error(err));
