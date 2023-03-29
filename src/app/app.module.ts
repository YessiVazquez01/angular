import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FooterIndexComponent } from './index/footer-index/footer-index.component';
import { LetreroComponent } from './index/letrero/letrero.component';
import { ModalIndexComponent } from './index/modal-index/modal-index.component';
import { RegistroComponent } from './registro/registro.component';
import { FormularioRegComponent } from './registro/formulario-reg/formulario-reg.component';
import { FooterRegComponent } from './registro/footer-reg/footer-reg.component';
import { InfoComponent } from './info/info.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarInfoComponent } from './navbar-info/navbar-info.component';
import { BannerComponent } from './info/banner/banner.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SkillComponent } from './skill/skill.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterInfoComponent } from './info/footer-info/footer-info.component';
import { ModalCerrarComponent } from './modal-cerrar/modal-cerrar.component';
import { AdminComponent } from './admin/admin.component';
import { BannerEditComponent } from './admin/banner-edit/banner-edit.component';
import { ModalPerfilComponent } from './admin/modal-perfil/modal-perfil.component';
import { ModalPerfilEliminarComponent } from './admin/modal-perfil-eliminar/modal-perfil-eliminar.component';
import { ModalAcercaComponent } from './admin/modal-acerca/modal-acerca.component';
import { BotonAcercaComponent } from './boton-acerca/boton-acerca.component';
import { ModalAcercaEliminarComponent } from './admin/modal-acerca-eliminar/modal-acerca-eliminar.component';
import { ModalExpComponent } from './admin/modal-exp/modal-exp.component';
import { BotonExpComponent } from './boton-exp/boton-exp.component';
import { ModalExpEliminarComponent } from './admin/modal-exp-eliminar/modal-exp-eliminar.component';
import { BotonEducComponent } from './boton-educ/boton-educ.component';
import { ModalEducComponent } from './admin/modal-educ/modal-educ.component';
import { ModalAducEliminarComponent } from './admin/modal-aduc-eliminar/modal-aduc-eliminar.component';
import { BotonHardComponent } from './boton-hard/boton-hard.component';
import { ModalHardComponent } from './admin/modal-hard/modal-hard.component';
import { ModalHardEliminarComponent } from './admin/modal-hard-eliminar/modal-hard-eliminar.component';
import { BotonProyecComponent } from './boton-proyec/boton-proyec.component';
import { ModalProyecComponent } from './admin/modal-proyec/modal-proyec.component';
import { ModalProyecEliminarComponent } from './admin/modal-proyec-eliminar/modal-proyec-eliminar.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FooterIndexComponent,
    LetreroComponent,
    ModalIndexComponent,
    RegistroComponent,
    FormularioRegComponent,
    FooterRegComponent,
    InfoComponent,
    NavbarComponent,
    NavbarInfoComponent,
    BannerComponent,
    AcercaComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillComponent,
    ProyectosComponent,
    FooterInfoComponent,
    ModalCerrarComponent,
    AdminComponent,
    BannerEditComponent,
    ModalPerfilComponent,
    ModalPerfilEliminarComponent,
    ModalAcercaComponent,
    BotonAcercaComponent,
    ModalAcercaEliminarComponent,
    ModalExpComponent,
    BotonExpComponent,
    ModalExpEliminarComponent,
    BotonEducComponent,
    ModalEducComponent,
    ModalAducEliminarComponent,
    BotonHardComponent,
    ModalHardComponent,
    ModalHardEliminarComponent,
    BotonProyecComponent,
    ModalProyecComponent,
    ModalProyecEliminarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
