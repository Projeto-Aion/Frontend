import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { HttpClientModule } from '@angular/common/http';

import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PerfilPadraoComponent } from './perfil-padrao/perfil-padrao.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { AlertaComponent } from './alerta/alerta.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastrarComponent,
    MenuComponent,
    RodapeComponent,
    QuemSomosComponent,
    InicioComponent,
    TemaComponent,
    TemaEditComponent,
    TemaDeleteComponent,
    PerfilPadraoComponent,
    UsuarioEditComponent,
    AlertaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
