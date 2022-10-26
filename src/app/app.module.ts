import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HardSkillsComponent } from './componentes/hard-skills/hard-skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { FooterComponent } from './componentes/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule} from '@angular/forms';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NewSkillComponent } from './componentes/hard-skills/new-skill.component';
import { EditSkillComponent } from './componentes/hard-skills/edit-skill.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { LoginService } from './service/login.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardSkillsComponent,
    ProyectosComponent,
    BannerComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    NewSkillComponent,
    EditSkillComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    EditAcercaDeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [LoginService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
