import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* firebase/angularfire2 */
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';

/* Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SideComponent } from './components/side/side.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { Err404Component } from './components/err404/err404.component';
import { ContactComponent } from './components/contact/contact.component';

/* Angular Material */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideComponent,
    HeaderComponent,
    FooterComponent,
    TechnologiesComponent,
    ProjectsComponent,
    Err404Component,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
