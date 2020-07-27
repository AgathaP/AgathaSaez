import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { Err404Component } from './components/err404/err404.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'proyectos', component: ProjectsComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'tecnologias', component: TechnologiesComponent },
  { path: 'skills', component: TechnologiesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', component: Err404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
